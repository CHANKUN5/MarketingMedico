import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Lightbulb, Compass, CheckCircle, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'

export default function Consultoria() {
  const currentService = services[5]
  const relatedServices = services.filter(s => s.id !== currentService.id).slice(0, 3)

  return (
    <>
      <section 
        className="py-5 text-white"
        style={{
          backgroundImage: `url(${currentService.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          minHeight: '400px'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(13, 110, 253, 0.9), rgba(13, 110, 253, 0.7))'
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }} className="h-100 d-flex align-items-center">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-3">{currentService.title}</h1>
              <p className="lead">{currentService.description}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">Estrategia digital personalizada</h2>
              <p className="text-muted mb-4">
                Nuestros consultores expertos analizan tu situación actual y diseñan 
                una estrategia digital integral adaptada a tus objetivos y al sector salud.
              </p>

              <h4 className="fw-bold mb-3">INCLUYE:</h4>
              <ul className="list-unstyled">
                {currentService.features.map((feature, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3 mt-1">
                      <ArrowRight size={16} className="text-primary" />
                    </div>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </Col>

            <Col lg={4}>
              <Card className="shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Consultoría gratuita</h5>
                  <p className="text-muted small mb-4">
                    Te regalamos 45 minutos de consultoría completamente gratis.
                  </p>
                  <Button 
                    as={Link} 
                    to="/trabaja-con-nosotros" 
                    variant="primary" 
                    className="w-100"
                  >
                    Agendar consultoría
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <h3 className="fw-bold mb-4">¿Qué obtienes con nuestra consultoría?</h3>
              <Row className="g-4">
                <Col md={4}>
                  <div className="text-center p-4">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                      <Lightbulb size={40} className="text-primary" />
                    </div>
                    <h5 className="fw-bold mb-3">Diagnóstico completo</h5>
                    <p className="text-muted small">
                      Análisis detallado de tu presencia digital actual
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center p-4">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                      <Compass size={40} className="text-primary" />
                    </div>
                    <h5 className="fw-bold mb-3">Plan estratégico</h5>
                    <p className="text-muted small">
                      Hoja de ruta clara para alcanzar tus objetivos
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center p-4">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                      <CheckCircle size={40} className="text-primary" />
                    </div>
                    <h5 className="fw-bold mb-3">Recomendaciones</h5>
                    <p className="text-muted small">
                      Acciones prioritarias y quick wins
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className="fw-bold mb-4">Servicios relacionados</h3>
              <Row className="g-4">
                {relatedServices.map(service => (
                  <Col key={service.id} md={4}>
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Img 
                        variant="top" 
                        src={service.image}
                        style={{ height: '180px', objectFit: 'cover' }}
                      />
                      <Card.Body>
                        <Card.Title className="fw-bold">{service.title}</Card.Title>
                        <Button 
                          as={Link} 
                          to={service.link} 
                          variant="outline-primary" 
                          size="sm"
                        >
                          Más información <ArrowRight size={14} className="ms-1" />
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}