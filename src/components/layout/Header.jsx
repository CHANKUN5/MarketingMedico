import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { services } from '../../data/services'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)

  const closeMenu = () => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
  }

  const handleServicesClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + rect.width / 2
      })
    }
    setDesktopServicesOpen(!desktopServicesOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setDesktopServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <Navbar bg="white" sticky="top" className="main-header shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
            <img 
              src="/logo-header.png" 
              alt="Marketing Médico" 
              className="header-logo"
              style={{ height: '50px', width: 'auto', maxWidth: '200px' }}
            />
          </Navbar.Brand>

          <button 
            className="mobile-menu-toggle d-lg-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              color: '#0d6efd',
              outline: 'none',
              boxShadow: 'none'
            }}
          >
            <Menu size={26} />
          </button>

          <Nav className="mx-auto d-none d-lg-flex align-items-center gap-4">
            <Nav.Link 
              as={NavLink} 
              to="/nosotros" 
              className="nav-item-custom px-3"
              style={{ color: '#0d6efd', fontWeight: '500' }}
            >
              Nosotros
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/testimonios" 
              className="nav-item-custom px-3"
              style={{ color: '#0d6efd', fontWeight: '500' }}
            >
              Testimonio
            </Nav.Link>

            <div className="custom-dropdown px-3">
              <button
                ref={buttonRef}
                className="custom-dropdown-toggle"
                onClick={handleServicesClick}
                style={{ 
                  color: '#0d6efd', 
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Servicios
              </button>
            </div>
          </Nav>
        </Container>
      </Navbar>

      {desktopServicesOpen && createPortal(
        <div 
          ref={dropdownRef}
          className="custom-dropdown-menu"
          style={{
            position: 'fixed',
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            zIndex: 9999,
            minWidth: '300px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
            borderRadius: '10px',
            boxShadow: '0 8px 30px rgba(13, 110, 253, 0.18)',
            padding: '0.75rem'
          }}
        >
          {services.map(service => (
            <Link
              key={service.id}
              to={service.link}
              className="custom-dropdown-item"
              onClick={() => setDesktopServicesOpen(false)}
              style={{
                display: 'block',
                width: '100%',
                whiteSpace: 'normal',
                padding: '0.75rem 1rem',
                color: '#333',
                fontWeight: '500',
                fontSize: '0.95rem',
                borderRadius: '6px',
                marginBottom: '0.25rem',
                position: 'relative',
                overflow: 'hidden',
                borderLeft: '3px solid transparent',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0d6efd'
                e.currentTarget.style.borderLeftColor = '#0d6efd'
                e.currentTarget.style.paddingLeft = '1.25rem'
                e.currentTarget.style.transform = 'translateX(3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#333'
                e.currentTarget.style.borderLeftColor = 'transparent'
                e.currentTarget.style.paddingLeft = '1rem'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              {service.title}
            </Link>
          ))}
        </div>,
        document.body
      )}

      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-backdrop" 
            onClick={closeMenu}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1100
            }}
          ></div>
          <div 
            className="mobile-menu-panel"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '250px',
              maxHeight: '100vh',
              background: '#0d6efd',
              zIndex: 1200,
              padding: 0,
              overflowY: 'auto',
              boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <button 
              className="mobile-close-btn" 
              onClick={closeMenu}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0d6efd',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                zIndex: 1300
              }}
            >
              <X size={22} />
            </button>

            <nav 
              className="mobile-nav"
              style={{
                marginTop: '4rem',
                padding: '0.5rem 0',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <NavLink 
                to="/nosotros" 
                className="mobile-nav-link" 
                onClick={closeMenu}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  padding: '1rem 0.75rem',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'block'
                }}
              >
                Nosotros
              </NavLink>

              <NavLink 
                to="/testimonios" 
                className="mobile-nav-link" 
                onClick={closeMenu}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  padding: '1rem 0.75rem',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'block'
                }}
              >
                Reseñas
              </NavLink>

              <div 
                className="mobile-dropdown"
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <button 
                  className="mobile-nav-link mobile-dropdown-btn"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    padding: '1rem 0.75rem',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>Servicios</span>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                </button>

                {servicesOpen && (
                  <div 
                    className="mobile-dropdown-menu"
                    style={{
                      background: 'rgba(0, 0, 0, 0.25)',
                      padding: '0.5rem 0'
                    }}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={service.id}
                        to={service.link}
                        className="mobile-dropdown-link"
                        onClick={closeMenu}
                        style={{
                          display: 'block',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          padding: '0.875rem 0.75rem',
                          textAlign: 'center',
                          textTransform: 'uppercase',
                          letterSpacing: '0.2px',
                          borderBottom: index === services.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'white'
                          e.currentTarget.style.color = '#0d6efd'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = 'white'
                        }}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}