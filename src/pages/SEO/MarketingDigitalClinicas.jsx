import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react'

export default function MarketingDigitalClinicas() {
  return (
    <>
      <section 
        style={{
          backgroundImage: 'url("/contacto.jpg")',
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
                Marketing Digital para Clínicas
              </h1>
              <p className="text-white mb-4" style={{ fontSize: '1.3rem' }}>
                Estrategias digitales especializadas para clínicas médicas. 
                Aumenta tus pacientes con marketing digital efectivo y ético.
              </p>
              <Button 
                as={Link}
                to="/"
                variant="primary" 
                size="lg"
                className="fw-bold"
                style={{ borderRadius: '50px', padding: '16px 40px' }}
              >
                Explorar Soluciones <ArrowRight className="ms-2" size={20} />
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
                Marketing Digital Especializado para Clínicas
              </h2>
              <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '900px', margin: '0 auto' }}>
                Transformamos clínicas médicas con estrategias digitales que respetan la ética médica 
                y generan resultados reales en captación de pacientes.
              </p>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col md={4}>
              <div className="text-center p-4">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#E8D4FF', borderRadius: '12px' }}>
                  <TrendingUp size={40} style={{ color: '#6C05FF' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Crecimiento Sostenible</h5>
                <p className="text-muted">
                  Estrategias de marketing digital que generan crecimiento constante y sostenible para tu clínica.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#C4F4E0', borderRadius: '12px' }}>
                  <Target size={40} style={{ color: '#00D829' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Pacientes Ideales</h5>
                <p className="text-muted">
                  Atraemos exactamente el tipo de pacientes que tu clínica necesita con segmentación precisa.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#FFD4D4', borderRadius: '12px' }}>
                  <Zap size={40} style={{ color: '#FF0006' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Resultados Rápidos</h5>
                <p className="text-muted">
                  Implementación ágil de estrategias que comienzan a mostrar resultados desde el primer mes.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <h3 className="text-center fw-bold mb-4" style={{ color: '#000' }}>
                Servicios de Marketing Digital para Clínicas
              </h3>
              <Row>
                <Col md={6}>
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>Presencia Digital Profesional</h5>
                    <p className="text-muted">Desarrollo de sitios web médicos optimizados y profesionales que generan confianza.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>SEO para Clínicas</h5>
                    <p className="text-muted">Posicionamiento en Google para que los pacientes te encuentren fácilmente.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>Redes Sociales Médicas</h5>
                    <p className="text-muted">Gestión profesional de redes sociales respetando las normativas médicas.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>Publicidad Digital Ética</h5>
                    <p className="text-muted">Campañas publicitarias que cumplen con las regulaciones del sector salud.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>Automatización de Citas</h5>
                    <p className="text-muted">Sistemas automatizados para gestión eficiente de citas y seguimiento de pacientes.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>Análisis y Reportes</h5>
                    <p className="text-muted">Métricas detalladas del rendimiento de tu marketing digital médico.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="text-center">
            <div className="bg-primary text-white p-5 rounded">
              <h3 className="fw-bold mb-4">
                Transforma tu Clínica con Marketing Digital
              </h3>
              <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                Únete a las clínicas que ya han multiplicado sus pacientes con nuestras estrategias digitales especializadas
              </p>
              <Button 
                as={Link}
                to="/"
                variant="light" 
                size="lg"
                className="fw-bold me-3"
                style={{ borderRadius: '50px', padding: '16px 40px' }}
              >
                Ver Todos los Servicios
              </Button>
              <Button 
                as={Link}
                to="/trabaja-con-nosotros"
                variant="outline-light" 
                size="lg"
                className="fw-bold"
                style={{ borderRadius: '50px', padding: '16px 40px' }}
              >
                Solicitar Consulta
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}