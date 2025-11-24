import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function MarketingMedicoPeru() {
  return (
    <>
      <section 
        style={{
          backgroundImage: 'url("/Home.jpeg")',
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
                Marketing Médico en Perú
              </h1>
              <p className="text-white mb-4" style={{ fontSize: '1.3rem' }}>
                Especialistas en marketing digital para clínicas y profesionales de la salud en Perú. 
                Aumenta tus pacientes con estrategias digitales comprobadas.
              </p>
              <Button 
                as={Link}
                to="/"
                variant="primary" 
                size="lg"
                className="fw-bold"
                style={{ borderRadius: '50px', padding: '16px 40px' }}
              >
                Ver Nuestros Servicios <ArrowRight className="ms-2" size={20} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="text-primary fw-bold text-center mb-5" style={{ fontSize: '2.5rem' }}>
                Marketing Médico Especializado para Perú
              </h2>
              
              <Row className="mb-5">
                <Col lg={6}>
                  <h3 className="fw-bold mb-4" style={{ color: '#000' }}>
                    ¿Por qué elegir Marketing Médico en Perú?
                  </h3>
                  <div className="mb-3 d-flex align-items-start">
                    <CheckCircle className="text-success me-3 mt-1" size={20} />
                    <p className="mb-2">Especialistas exclusivos en el sector salud peruano</p>
                  </div>
                  <div className="mb-3 d-flex align-items-start">
                    <CheckCircle className="text-success me-3 mt-1" size={20} />
                    <p className="mb-2">Conocimiento profundo del mercado médico local</p>
                  </div>
                  <div className="mb-3 d-flex align-items-start">
                    <CheckCircle className="text-success me-3 mt-1" size={20} />
                    <p className="mb-2">Estrategias adaptadas a la cultura peruana</p>
                  </div>
                  <div className="mb-3 d-flex align-items-start">
                    <CheckCircle className="text-success me-3 mt-1" size={20} />
                    <p className="mb-2">Resultados comprobados con clínicas peruanas</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <h3 className="fw-bold mb-4" style={{ color: '#000' }}>
                    Servicios de Marketing Médico
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Marketing Digital para Clínicas</li>
                    <li className="mb-2">✓ Automatización de Marketing Médico</li>
                    <li className="mb-2">✓ Desarrollo Web para Profesionales de Salud</li>
                    <li className="mb-2">✓ Gestión de Redes Sociales Médicas</li>
                    <li className="mb-2">✓ Consultoría en Marketing de Salud</li>
                    <li className="mb-2">✓ SEO para Clínicas y Doctores</li>
                  </ul>
                </Col>
              </Row>

              <div className="text-center">
                <h3 className="fw-bold mb-4" style={{ color: '#000' }}>
                  Comienza tu Transformación Digital Médica
                </h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                  Únete a las clínicas peruanas que ya confían en nuestro marketing médico especializado
                </p>
                <Button 
                  as={Link}
                  to="/"
                  variant="primary" 
                  size="lg"
                  className="fw-bold me-3"
                  style={{ borderRadius: '50px', padding: '16px 40px' }}
                >
                  Conocer Servicios
                </Button>
                <Button 
                  as={Link}
                  to="/trabaja-con-nosotros"
                  variant="outline-primary" 
                  size="lg"
                  className="fw-bold"
                  style={{ borderRadius: '50px', padding: '16px 40px' }}
                >
                  Contactar Ahora
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}