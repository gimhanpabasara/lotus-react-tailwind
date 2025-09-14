import React, { useRef, useEffect } from 'react'

// Simple Motion component that mimics framer-motion's API on a very small scale.
// Props:
// - as: string (tag name) default 'div'
// - initial: object of CSS properties (opacity, transform, etc.)
// - animate: object of CSS properties to animate to
// - transition: { duration, easing, delay }
// - className, children
export default function Motion({ as='div', initial = {}, animate = {}, transition = {}, className='', children, style={} }){
  const Tag = as
  const ref = useRef(null)

  useEffect(()=>{
    const el = ref.current
    if(!el || !el.animate) {
      // fallback: directly set final styles
      Object.assign(el.style, animate)
      return
    }
    // set initial styles
    Object.assign(el.style, initial)
    const keyframes = [ initial, animate ]
    const timing = {
      duration: (transition.duration || 600),
      easing: transition.easing || 'cubic-bezier(.22,.9,.21,1)',
      fill: 'forwards',
      delay: transition.delay || 0
    }
    const anim = el.animate(keyframes, timing)
    return ()=> anim.cancel()
  }, [JSON.stringify(initial), JSON.stringify(animate), JSON.stringify(transition)])

  return <Tag ref={ref} className={className} style={style}>{children}</Tag>
}
