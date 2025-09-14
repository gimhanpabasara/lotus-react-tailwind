import { useEffect, useRef } from 'react'

// simple parallax: change backgroundPositionY based on scroll
export default function useParallax(speed = 0.3){
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    if(!el) return
    function onScroll(){
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      const visible = Math.max(0, Math.min(rect.bottom, windowH) - Math.max(rect.top, 0))
      const pct = visible / windowH
      const y = (window.scrollY * speed) % 100
      el.style.backgroundPosition = `center ${- (window.scrollY * speed)}px`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [speed])
  return ref
}
