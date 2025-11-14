import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'

export default function Resenas() {
  const resenas = [
    {
      id: 1,
      title: 'Reseña 1',
      company: 'Grupo Marketing Médico',
      rating: 4,
      comment: 'Una opción confiable para adquirir experiencia laboral. El ambiente es bueno y aprenderás mucho sobre marketing digital aplicado a salud.',
      link: '/resenas/resena-1'
    },
    {
      id: 2,
      title: 'Reseña 2',
      company: 'Grupo Marketing Médico',
      rating: 4,
      comment: 'Muy contenta con los aprendizajes adquiridos. Los proyectos son variados y el equipo es colaborativo, lo que permite crecer profesionalmente.',
      link: '/resenas/resena-2'
    }
  ]

  return (
    <>
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="fw-bold mb-3">Reseñas</h1>
              <p className="lead">Lo que opinan quienes trabajaron con nosotros</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="g-4">
            {resenas.map(resena => (
              <Col key={resena.id} md={6}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                        <Star size={24} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="fw-bold mb-0">{resena.company}</h5>
                        <div className="rating-stars">
                          {[...Array(resena.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mb-3">{resena.comment}</p>
                    <Link 
                      to={resena.link} 
                      className="btn btn-outline-primary"
                    >
                      Más información <ArrowRight size={16} className="ms-1" />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}