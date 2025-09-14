import { useEffect, useRef } from 'react'

// returns a ref to attach to an element; adds 'revealed' class when in view
export default function useScrollReveal({ root=null, rootMargin='-10% 0px', threshold=0.12 } = {}){
  const ref = useRef(null)
  useEffect(()=>{
    const node = ref.current
    if(!node) return
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          node.classList.add('revealed')
          obs.unobserve(node)
        }
      })
    }, { root, rootMargin, threshold })
    obs.observe(node)
    return ()=> obs.disconnect()
  }, [ref.current])
  return ref
}
