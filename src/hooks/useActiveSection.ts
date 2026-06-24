import { useState, useEffect, useRef } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')
  const intersecting = useRef(new Set<string>())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.current.add(entry.target.id)
          } else {
            intersecting.current.delete(entry.target.id)
          }
        })
        const firstActive = sectionIds.find((id) => intersecting.current.has(id))
        if (firstActive) setActive(firstActive)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
