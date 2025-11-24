import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Award } from 'lucide-react'

export default function AgenciaMarketingMedico() {
  return (
    <>
      <section 
        style={{
          backgroundImage: 'url("/Nosotros.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          height: '500px'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)'
          }}
        />
        <Container className="h-100 d-flex align-items-center" style={{ position: 'relative', zIndex: 2 }}>
          <Row>
            <Col lg={8}>
              <h1 className="text-white fw-bold mb-4" style={{ fontSize: '3rem' }}>
                Agencia de Marketing Médico
              </h1>
              <p className="text-white mb-4" style={{ fontSize: '1.3rem' }}>
                La agencia líder en marketing digital para el sector salud. 
                Especialistas en hacer crecer clínicas y consultorios médicos.
              </p>
              <Button 
                as={Link}
                to="/"
                variant="primary" 
                size="lg"
                className="fw-bold"
                style={{ borderRadius: '50px', padding: '16px 40px' }}
              >
                Descubrir Servicios <ArrowRight className="ms-2" size={20} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
                Tu Agencia de Marketing Médico de Confianza
              </h2>
              <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                Somos la única agencia especializada exclusivamente en marketing médico. 
                Entendemos las necesidades específicas del sector salud.
              </p>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col md={4}>
              <div className="text-center p-4">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#E8D4FF', borderRadius: '12px' }}>
                  <Users size={40} style={{ color: '#6C05FF' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Experiencia Médica</h5>
                <p className="text-muted">
                  Más de 5 años especializados únicamente en marketing para clínicas y profesionales de la salud.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#C4F4E0', borderRadius: '12px' }}>
                  <Award size={40} style={{ color: '#00D829' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Resultados Comprobados</h5>
                <p className="text-muted">
                  Hemos ayudado a cientos de clínicas a aumentar sus pacientes hasta en un 300%.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#FFD4D4', borderRadius: '12px' }}>
                  <Star size={40} style={{ color: '#FF0006' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Atención Personalizada</h5>
                <p className="text-muted">
                  Cada estrategia es diseñada específicamente para las necesidades de tu práctica médica.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="bg-light p-5 rounded text-center">
                <h3 className="fw-bold mb-4" style={{ color: '#000' }}>
                  ¿Por qué somos la mejor agencia de marketing médico?
                </h3>
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled text-start">
                      <li className="mb-2">✓ Especialización exclusiva en salud</li>
                      <li className="mb-2">✓ Equipo con experiencia médica</li>
                      <li className="mb-2">✓ Estrategias éticas y profesionales</li>
                      <li className="mb-2">✓ Conocimiento de regulaciones sanitarias</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled text-start">
                      <li className="mb-2">✓ Tecnología de vanguardia</li>
                      <li className="mb-2">✓ Soporte continuo y personalizado</li>
                      <li className="mb-2">✓ Métricas y reportes detallados</li>
                      <li className="mb-2">✓ ROI garantizado y medible</li>
                    </ul>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Button 
                    as={Link}
                    to="/"
                    variant="primary" 
                    size="lg"
                    className="fw-bold me-3"
                    style={{ borderRadius: '50px', padding: '16px 40px' }}
                  >
                    Ver Servicios
                  </Button>
                  <Button 
                    as={Link}
                    to="/nosotros"
                    variant="outline-primary" 
                    size="lg"
                    className="fw-bold"
                    style={{ borderRadius: '50px', padding: '16px 40px' }}
                  >
                    Conocer Más
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}