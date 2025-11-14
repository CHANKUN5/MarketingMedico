import { Container, Row, Col, Card } from 'react-bootstrap'
import { Star, Calendar, User } from 'lucide-react'

export default function Resena2() {
  return (
    <>
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="fw-bold">Reseña 2</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4 p-md-5">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Reviewer"
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h5 className="fw-bold mb-1">Lucía Fernández</h5>
                      <div className="rating-stars">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} size={18} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-4 text-muted small">
                    <span>
                      <Calendar size={16} className="me-1" />
                      Febrero 2024
                    </span>
                    <span>
                      <User size={16} className="me-1" />
                      Practicante de Diseño
                    </span>
                  </div>

                  <h4 className="fw-bold mb-3">Crecimiento profesional garantizado</h4>

                  <p className="text-muted mb-3">
                    Muy contenta con los aprendizajes adquiridos. Los proyectos son 
                    variados y el equipo es colaborativo, lo que permite crecer 
                    profesionalmente.
                  </p>

                  <p className="text-muted mb-3">
                    Como diseñadora, pude trabajar en diferentes tipos de materiales: 
                    desde posts para redes sociales hasta landing pages completas. 
                    Cada proyecto fue un nuevo desafío que me ayudó a mejorar mis 
                    habilidades.
                  </p>

                  <p className="text-muted mb-4">
                    El ambiente de trabajo es excelente y siempre hay disposición 
                    para resolver dudas y brindar feedback constructivo.
                  </p>

                  <div className="border-top pt-4">
                    <h6 className="fw-bold mb-3">Aspectos destacados:</h6>
                    <ul className="text-muted">
                      <li>Proyectos variados y desafiantes</li>
                      <li>Equipo colaborativo</li>
                      <li>Feedback constante y constructivo</li>
                      <li>Oportunidad de trabajar con tecnologías actuales</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}