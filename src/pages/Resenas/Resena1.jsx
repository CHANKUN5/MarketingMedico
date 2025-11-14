import { Container, Row, Col, Card } from 'react-bootstrap'
import { Star, Calendar, User } from 'lucide-react'

export default function Resena1() {
  return (
    <>
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="fw-bold">Reseña 1</h1>
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
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Reviewer"
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h5 className="fw-bold mb-1">Ana María Torres</h5>
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
                      Marzo 2024
                    </span>
                    <span>
                      <User size={16} className="me-1" />
                      Practicante de Marketing
                    </span>
                  </div>

                  <h4 className="fw-bold mb-3">Una gran experiencia de aprendizaje</h4>

                  <p className="text-muted mb-3">
                    Una opción confiable para adquirir experiencia laboral. El ambiente 
                    es bueno y aprenderás mucho sobre marketing digital aplicado al 
                    sector salud.
                  </p>

                  <p className="text-muted mb-3">
                    Durante mi tiempo en Marketing Médico, tuve la oportunidad de 
                    trabajar en proyectos reales con clientes del sector salud. El 
                    equipo es muy profesional y siempre dispuesto a enseñar.
                  </p>

                  <p className="text-muted mb-4">
                    Recomiendo esta agencia para quienes buscan crecer profesionalmente 
                    en el área de marketing digital especializado.
                  </p>

                  <div className="border-top pt-4">
                    <h6 className="fw-bold mb-3">Aspectos destacados:</h6>
                    <ul className="text-muted">
                      <li>Ambiente de trabajo colaborativo</li>
                      <li>Proyectos con clientes reales</li>
                      <li>Aprendizaje constante</li>
                      <li>Equipo profesional y dispuesto a enseñar</li>
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