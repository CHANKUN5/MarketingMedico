import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function QuickNavButton({ to = '/trabaja-con-nosotros', className = '' }) {
  return (
    <Link
      to={to}
      className={`quick-nav-button ${className}`}
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        width: '50px',
        height: '50px',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333333',
        textDecoration: 'none',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease',
        border: '2px solid rgba(255, 255, 255, 0.8)'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#f8f9fa'
        e.target.style.transform = 'scale(1.1)'
        e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)'
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#ffffff'
        e.target.style.transform = 'scale(1)'
        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}
      title="Volver a Reclutamiento"
    >
      <ArrowLeft size={24} />
    </Link>
  )
}