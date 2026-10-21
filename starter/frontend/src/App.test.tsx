import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from './App.tsx'

// MapLibre needs WebGL, which jsdom does not have.
vi.mock('./MapView.tsx', () => ({ MapView: () => <div data-testid="map" /> }))

describe('App', () => {
  it('renders the shell', () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error('offline'))))
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Observation explorer' })).toBeInTheDocument()
    expect(screen.getByTestId('map')).toBeInTheDocument()
  })
})
