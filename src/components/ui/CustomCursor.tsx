'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx - 4 + 'px'
        dotRef.current.style.top = my - 4 + 'px'
      }
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx - 16 + 'px'
        ringRef.current.style.top = ry - 16 + 'px'
      }
      rafId = requestAnimationFrame(animRing)
    }

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '48px'
        ringRef.current.style.height = '48px'
        ringRef.current.style.borderColor = 'rgba(0,212,255,0.6)'
      }
    }

    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '32px'
        ringRef.current.style.height = '32px'
        ringRef.current.style.borderColor = 'rgba(0,212,255,0.4)'
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafId = requestAnimationFrame(animRing)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ transition: 'transform 0.1s' }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9998]"
        style={{
          border: '1px solid rgba(0,212,255,0.4)',
          transition: 'width 0.2s, height 0.2s',
        }}
        aria-hidden
      />
    </>
  )
}
