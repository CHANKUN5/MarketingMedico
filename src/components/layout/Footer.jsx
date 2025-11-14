import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'
import { services } from '../../data/services'
import { socialLinks } from '../../data/socialLinks'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-4 text-center text-lg-start">
            <img
              src="/logo-footer.png"
              alt="Marketing Médico"
              height="50"
              className="mb-3"
              style={{ maxWidth: '180px', height: 'auto' }}
            />
            <p className="text-white-50 small">
              Agencia de Marketing Digital
            </p>
            <p className="text-white-50 small mb-0">
              © 2021 All Rights Reserved
            </p>
          </Col>

          <Col lg={2} md={6} className="mb-4 d-none d-lg-block">
            <h5 className="text-white mb-3">Nosotros</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/nosotros" className="text-white-50 text-decoration-none">
                  Ir a Nosotros
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4 d-none d-lg-block">
            <h5 className="text-white mb-3">Reseña</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/resenas/resena-1" className="text-white-50 text-decoration-none">
                  Reseña 1
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/resenas/resena-2" className="text-white-50 text-decoration-none">
                  Reseña 2
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4 d-none d-lg-block">
            <h5 className="text-white mb-3">Trabaja con nosotros</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/trabaja-con-nosotros" className="text-white-50 text-decoration-none">
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 d-none d-lg-block">
            <h5 className="text-white mb-3">Servicios</h5>
            <ul className="list-unstyled">
              {services.map(service => (
                <li key={service.id} className="mb-2">
                  <Link 
                    to={service.link} 
                    className="text-white-50 text-decoration-none small"
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
                  e.currentTarget.style.color = '#0d6efd'
                  e.currentTarget.style.transform = 'scale(1.15)'
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) svg.style.color = '#0d6efd'
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
                  e.currentTarget.style.color = '#0d6efd'
                  e.currentTarget.style.transform = 'scale(1.15)'
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) svg.style.color = '#0d6efd'
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
              <a 
                href={socialLinks.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white social-icon-link"
                style={{ transition: 'all 0.3s ease', display: 'inline-flex' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0d6efd'
                  e.currentTarget.style.transform = 'scale(1.15)'
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) svg.style.color = '#0d6efd'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'scale(1)'
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) svg.style.color = 'white'
                }}
              >
                <FaTiktok size={24} style={{ transition: 'all 0.3s ease' }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}