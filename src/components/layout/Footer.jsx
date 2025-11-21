import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'
import { services } from '../../data/services'
import { socialLinks } from '../../data/socialLinks'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        {/* Sección móvil */}
        <div className="d-lg-none">
          {/* Logo */}
          <Row className="mb-3 pb-3 border-bottom border-secondary">
            <Col xs={12} className="text-center">
              <img
                src="/logo-footer.png"
                alt="Marketing Médico"
                height="50"
                style={{ maxWidth: '180px', height: 'auto' }}
              />
            </Col>
          </Row>

          {/* Nosotros */}
          <Row className="mb-3 pb-3 border-bottom border-secondary">
            <Col xs={12}>
              <h5 className="text-white mb-3">Nosotros</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link 
                    to="/nosotros" 
                    className="text-white-50 text-decoration-none footer-link"
                  >
                    Ir a Nosotros
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Reseña */}
          <Row className="mb-3 pb-3 border-bottom border-secondary">
            <Col xs={12}>
              <h5 className="text-white mb-3">Reseña</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link 
                    to="/testimonios" 
                    className="text-white-50 text-decoration-none footer-link"
                  >
                    Ver Reseñas
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Trabaja con nosotros */}
          <Row className="mb-3 pb-3 border-bottom border-secondary">
            <Col xs={12}>
              <h5 className="text-white mb-3">Trabaja con nosotros</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link 
                    to="/trabaja-con-nosotros" 
                    className="text-white-50 text-decoration-none footer-link"
                  >
                    Trabaja con nosotros
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Servicios */}
          <Row className="mb-3">
            <Col xs={12}>
              <h5 className="text-white mb-3">Servicios</h5>
              <ul className="list-unstyled">
                {services.map(service => (
                  <li key={service.id} className="mb-2">
                    <Link 
                      to={service.link} 
                      className="text-white-50 text-decoration-none small footer-link"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>

        {/* Sección desktop - mantiene el diseño original */}
        <Row className="mb-4 d-none d-lg-flex">
          <Col lg={3} md={6} className="mb-4 text-center text-lg-start">
            <img
              src="/logo-footer.png"
              alt="Marketing Médico"
              height="50"
              className="mb-3"
              style={{ maxWidth: '180px', height: 'auto' }}
            />
            <p className="text-white-50 small mb-0">
              © 2021 All Rights Reserved
            </p>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h5 className="text-white mb-3">Nosotros</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/nosotros" 
                  className="text-white-50 text-decoration-none footer-link"
                >
                  Ir a Nosotros
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h5 className="text-white mb-3">Reseña</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/testimonios" 
                  className="text-white-50 text-decoration-none footer-link"
                >
                  Ver Reseñas
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4" style={{ paddingRight: '60px' }}>
            <h5 className="text-white mb-3">Trabaja con nosotros</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/trabaja-con-nosotros" 
                  className="text-white-50 text-decoration-none footer-link"
                >
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-white mb-3">Servicios</h5>
            <ul className="list-unstyled">
              {services.map(service => (
                <li key={service.id} className="mb-2">
                  <Link 
                    to={service.link} 
                    className="text-white-50 text-decoration-none small footer-link"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="pt-3 border-top border-secondary">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white social-icon-link"
                style={{ transition: 'all 0.3s ease', display: 'inline-flex' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0640FF'
                  e.currentTarget.style.transform = 'scale(1.15)'
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) svg.style.color = '#0640FF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'scale(1)'
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) svg.style.color = 'white'
                }}
              >
                <Facebook size={24} style={{ transition: 'all 0.3s ease' }} />
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white social-icon-link"
                style={{ transition: 'all 0.3s ease', display: 'inline-flex' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0640FF'
                  e.currentTarget.style.transform = 'scale(1.15)'
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) svg.style.color = '#0640FF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'scale(1)'
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) svg.style.color = 'white'
                }}
              >
                <Instagram size={24} style={{ transition: 'all 0.3s ease' }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}