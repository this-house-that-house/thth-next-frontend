import { drawerContainer } from './index.css'

export default function ({ open, children }) {
  return (
    <div className={drawerContainer} style={{
      gridTemplateRows: open ? '1fr' : '0fr'
    }}>
      <div style={{ overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  )
}