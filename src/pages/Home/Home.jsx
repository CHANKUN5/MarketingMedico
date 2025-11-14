import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, Target } from 'lucide-react'
import HeroSlider from '../../components/ui/HeroSlider'
import ServiceCard from '../../components/ui/ServiceCard'
import { services } from '../../data/services'

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3">
                ¿QUIÉNES SOMOS <span className="text-primary">NOSOTROS?</span>
              </h2>
              <p className="text-muted">
                Somos una agencia que une creatividad y tecnología para fortalecer la presencia digital de profesionales y clínicas, generando confianza y conexión con sus pacientes.
              </p>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col md={4}>
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Users size={40} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-3">Compromiso y ética</h5>
                <p className="text-muted small">
                  Trabajamos con responsabilidad y transparencia, involucrándote en cada proyecto como si fuera propio.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Award size={40} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-3">Innovación y excelencia</h5>
                <p className="text-muted small">
                  Comprendemos las necesidades del sector salud y bienestar para ofrecer soluciones adecuadas.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Target size={40} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-3">Empatía</h5>
                <p className="text-muted small">
                  Combinamos tecnología e inteligencia artificial para crear estrategias efectivas y de alta calidad.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold text-primary mb-3">NUESTROS SERVICIOS</h2>
            </Col>
          </Row>

          <Row className="g-4">
            {services.map(service => (
              <Col key={service.id} md={6} lg={4}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3 className="fw-bold mb-3">
                ¿Tu también estas listo para hacer crecer tu negocio?
              </h3>
              <p className="mb-0">
                Te regalamos una consultoría de 45 minutos ¡TOTALMENTE GRATIS!
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <Button 
                as={Link} 
                to="/trabaja-con-nosotros" 
                variant="light" 
                size="lg"
                className="fw-bold"
              >
                Más información <ArrowRight className="ms-2" size={20} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}