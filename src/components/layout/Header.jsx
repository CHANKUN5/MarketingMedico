import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { services } from '../../data/services'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMenu = () => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <>
      <Navbar bg="white" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
            <img 
              src="/logo-header.png" 
              alt="Marketing Médico" 
              style={{ height: '50px' }}
            />
          </Navbar.Brand>

          <button 
            className="mobile-menu-toggle d-lg-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              color: '#0640FF',
              outline: 'none',
              boxShadow: 'none'
            }}
          >
            <Menu size={26} />
          </button>

          <Nav className="mx-auto d-none d-lg-flex align-items-center">
            <Nav.Link 
              as={NavLink} 
              to="/nosotros" 
              className="nav-item-custom"
              style={{ fontWeight: '400' }}
            >
              Nosotros
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/testimonios" 
              className="nav-item-custom"
              style={{ fontWeight: '400' }}
            >
              Testimonios
            </Nav.Link>

            <NavDropdown 
              title="Servicios" 
              id="servicios-dropdown"
              style={{ fontWeight: '400' }}
            >
              {services.map(service => (
                <NavDropdown.Item 
                  key={service.id}
                  as={Link} 
                  to={service.link}
                  style={{ fontWeight: '400' }}
                >
                  {service.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

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
              background: '#0640FF',
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
                color: '#0640FF',
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
                Testimonios
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
                          e.currentTarget.style.color = '#0640FF'
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
