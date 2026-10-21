import { useEffect, useState } from 'react'
import { MapView } from './MapView.tsx'

type Health = { status: string; observations: number; parcels: number }

export default function App() {
  const [health, setHealth] = useState<Health | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth(null))
  }, [])

  return (
    <div className="layout">
      <aside className="sidebar">
        <h1>Observation explorer</h1>
        <p>
          {health
            ? `API up: ${health.observations.toLocaleString()} observations, ${health.parcels.toLocaleString()} parcels`
            : 'Waiting for the API on :8000…'}
        </p>
      </aside>
      <MapView />
    </div>
  )
}
