import { useEffect, useRef } from 'react'
import { Map as MapLibreMap, NavigationControl } from 'maplibre-gl'

// Keyless basemap. See https://openfreemap.org for other styles.
const STYLE = 'https://tiles.openfreemap.org/styles/liberty'

// Centre of Lebanon, TN: the downtown square.
const CENTER: [number, number] = [-86.2911, 36.2081]

export function MapView() {
  const container = useRef<HTMLDivElement>(null)
  const map = useRef<MapLibreMap | null>(null)

  useEffect(() => {
    if (!container.current || map.current) return
    map.current = new MapLibreMap({
      container: container.current,
      style: STYLE,
      center: CENTER,
      zoom: 13,
    })
    map.current.addControl(new NavigationControl(), 'top-right')
    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [])

  return <div ref={container} className="map" />
}
