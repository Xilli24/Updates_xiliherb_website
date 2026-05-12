'use client'
import { useEffect, useRef } from 'react'

export function Entropy({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!canvas || !container) return

    const ctxRaw = canvas.getContext('2d')
    if (!ctxRaw) return
    const ctx: CanvasRenderingContext2D = ctxRaw

    const W = container.offsetWidth || window.innerWidth
    const H = container.offsetHeight || window.innerHeight
    const dpr = window.devicePixelRatio || 1

    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = `${W}px`
    canvas.style.height = `${H}px`
    ctx.scale(dpr, dpr)

    const particleColor = '#ffffff'

    const gridCols = Math.min(20, Math.floor(W / 40))
    const gridRows = Math.min(14, Math.floor(H / 40))
    const spacingX = W / gridCols
    const spacingY = H / gridRows

    class Particle {
      x: number; y: number; size: number; order: boolean
      velocity: { x: number; y: number }
      originalX: number; originalY: number
      influence: number; neighbors: Particle[]

      constructor(x: number, y: number, order: boolean) {
        this.x = x; this.y = y
        this.originalX = x; this.originalY = y
        this.size = 1.8
        this.order = order
        this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }
        this.influence = 0; this.neighbors = []
      }

      update() {
        if (this.order) {
          const dx = this.originalX - this.x
          const dy = this.originalY - this.y
          const ci = { x: 0, y: 0 }
          this.neighbors.forEach(n => {
            if (!n.order) {
              const d = Math.hypot(this.x - n.x, this.y - n.y)
              const s = Math.max(0, 1 - d / 100)
              ci.x += n.velocity.x * s; ci.y += n.velocity.y * s
              this.influence = Math.max(this.influence, s)
            }
          })
          this.x += dx * 0.05 * (1 - this.influence) + ci.x * this.influence
          this.y += dy * 0.05 * (1 - this.influence) + ci.y * this.influence
          this.influence *= 0.99
        } else {
          this.velocity.x += (Math.random() - 0.5) * 0.5
          this.velocity.y += (Math.random() - 0.5) * 0.5
          this.velocity.x *= 0.95; this.velocity.y *= 0.95
          this.x += this.velocity.x; this.y += this.velocity.y
          if (this.x < W / 2 || this.x > W) this.velocity.x *= -1
          if (this.y < 0 || this.y > H) this.velocity.y *= -1
          this.x = Math.max(W / 2, Math.min(W, this.x))
          this.y = Math.max(0, Math.min(H, this.y))
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.order ? 0.8 - this.influence * 0.5 : 0.8
        ctx.fillStyle = `${particleColor}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const x = spacingX * i + spacingX / 2
        const y = spacingY * j + spacingY / 2
        particles.push(new Particle(x, y, x < W / 2))
      }
    }

    function updateNeighbors() {
      particles.forEach(p => {
        p.neighbors = particles.filter(o => o !== p && Math.hypot(p.x - o.x, p.y - o.y) < 100)
      })
    }

    let time = 0
    let animId: number

    function animate() {
      ctx.clearRect(0, 0, W, H)
      if (time % 30 === 0) updateNeighbors()
      particles.forEach(p => {
        p.update(); p.draw(ctx)
        p.neighbors.forEach(n => {
          const d = Math.hypot(p.x - n.x, p.y - n.y)
          if (d < 50) {
            const alpha = 0.2 * (1 - d / 50)
            ctx.strokeStyle = `${particleColor}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`
            ctx.lineWidth = 0.5
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(n.x, n.y); ctx.stroke()
          }
        })
      })
      // divider
      ctx.strokeStyle = `${particleColor}30`
      ctx.lineWidth = 0.5
      ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke()
      time++
      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => { if (animId) cancelAnimationFrame(animId) }
  }, [])

  return (
    <div ref={containerRef} className={`absolute inset-0 bg-black ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  )
}
