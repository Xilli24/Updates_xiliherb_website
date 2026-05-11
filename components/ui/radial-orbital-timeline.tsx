"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
}

export default function RadialOrbitalTimeline({
  timelineData,
  className,
}: RadialOrbitalTimelineProps) {
  const [mounted, setMounted] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });
      newState[id] = !prev[id];
      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;
    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }
    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 160;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":   return "text-white bg-black border-white";
      case "in-progress": return "text-black bg-white border-black";
      case "pending":     return "text-white bg-black/40 border-white/50";
      default:            return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col items-center justify-center overflow-hidden",
        className
      )}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Centre orb */}
          <div className="absolute w-14 h-14 rounded-full flex items-center justify-center z-10"
            style={{ background: "linear-gradient(135deg, #1E3F6E 0%, #5BAC2E 100%)" }}
          >
            <div className="absolute w-16 h-16 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div className="absolute w-20 h-20 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-6 h-6 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          {/* Orbit ring */}
          <div className="absolute w-80 h-80 rounded-full border border-white/15"></div>

          {mounted && timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Energy aura */}
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`}
                  style={{
                    background: "radial-gradient(circle, rgba(91,172,46,0.25) 0%, rgba(91,172,46,0) 70%)",
                    width: `${item.energy * 0.3 + 36}px`,
                    height: `${item.energy * 0.3 + 36}px`,
                    left: `-${(item.energy * 0.3 + 36 - 36) / 2}px`,
                    top: `-${(item.energy * 0.3 + 36 - 36) / 2}px`,
                  }}
                />

                {/* Node circle — icon */}
                <div className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 transform",
                  isExpanded
                    ? "bg-white text-black border-white shadow-lg scale-150"
                    : isRelated
                    ? "bg-white/50 text-black border-white animate-pulse"
                    : "bg-black/60 text-white border-white/40"
                )}>
                  <Icon size={14} />
                </div>

                {/* Label — number · title */}
                <div className={cn(
                  "absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300",
                  isExpanded ? "text-white scale-125" : "text-white/75"
                )}>
                  <span style={{ color: "#5BAC2E", fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em" }}>
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <span style={{ color: "inherit", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", marginLeft: "4px" }}>
                    {item.title}
                  </span>
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-56 bg-black/90 backdrop-blur-lg border-white/20 shadow-xl overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/40"></div>
                    <CardHeader className="pb-2 px-4 pt-4">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-[10px] ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "DONE" : item.status === "in-progress" ? "ACTIVE" : "NEXT"}
                        </Badge>
                        <span className="text-[10px] font-mono text-white/50">{item.date}</span>
                      </div>
                      <CardTitle className="text-xs mt-2 text-white flex items-center gap-2">
                        <Icon size={12} style={{ color: "#5BAC2E", flexShrink: 0 }} />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-[11px] text-white/80 px-4 pb-4">
                      <p>{item.content}</p>
                      <div className="mt-3 pt-2 border-t border-white/10">
                        <div className="flex justify-between items-center text-[10px] mb-1">
                          <span className="flex items-center gap-1">
                            <Zap size={9} /> Progress
                          </span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${item.energy}%`,
                              background: "linear-gradient(to right, #1E3F6E, #5BAC2E)",
                            }}
                          />
                        </div>
                      </div>
                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-white/10">
                          <div className="flex items-center mb-2 gap-1">
                            <Link size={9} className="text-white/60" />
                            <span className="text-[10px] uppercase tracking-wider text-white/60">Connected</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="h-5 px-2 py-0 text-[10px] rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={7} className="ml-1 text-white/60" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
