import { Container, Row, Col } from 'react-bootstrap'
import { Users, Target, Award, Heart } from 'lucide-react'

export default function Nosotros() {
  return (
    <>
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Nuestro equipo"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6}>
              <h1 className="fw-bold mb-4">
                Sobre <span className="text-primary">Nosotros</span>
              </h1>
              <p className="text-muted mb-4">
                Somos una agencia que une creatividad y tecnología para fortalecer 
                la presencia digital de profesionales y clínicas del sector salud, 
                generando confianza y conexión con sus pacientes.
              </p>
              <p className="text-muted">
                Nuestro equipo está conformado por especialistas en marketing digital, 
                desarrollo web, diseño gráfico y consultoría estratégica, todos 
                comprometidos con la excelencia y la innovación.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3">Nuestros Valores</h2>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Users size={40} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-3">Compromiso</h5>
                <p className="text-muted small">
                  Trabajamos con dedicación en cada proyecto
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Target size={40} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-3">Innovación</h5>
                <p className="text-muted small">
                  Soluciones creativas y tecnológicas
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Award size={40} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-3">Excelencia</h5>
                <p className="text-muted small">
                  Calidad en cada entrega
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Heart size={40} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-3">Empatía</h5>
                <p className="text-muted small">
                  Entendemos tus necesidades
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}