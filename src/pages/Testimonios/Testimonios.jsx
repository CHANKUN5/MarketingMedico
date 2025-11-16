import { Container, Row, Col, Card } from 'react-bootstrap'
import { Star } from 'lucide-react'
import ContactForm from '../../components/ui/ContactForm'

export default function Testimonios() {
  const testimonials = [
    {
      id: 1,
      image: '/reseña 1.png',
      stars: 4,
      text: 'Gracias a Marketing Médico logramos llegar a más pacientes y mejorar nuestra presencia digital. El equipo siempre está atento a nuestras necesidades.'
    },
    {
      id: 2,
      image: '/reseña 2.png',
      stars: 4,
      text: 'Gracias a Marketing Médico por su excelente trabajo. Su apoyo ha sido clave para que nuestra clínica dental crezca y llegue a más pacientes. Muy buena atención y resultados visibles.'
    }
  ]

  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="g-4 mb-5">
            {testimonials.map(testimonial => (
              <Col key={testimonial.id} md={6}>
                <Card 
                  className="h-100 border-0 shadow-lg"
                  style={{ 
                    backgroundColor: '#0640FF',
                    borderRadius: '20px',
                    overflow: 'hidden'
                  }}
                >
                  <Card.Body className="p-4 text-center text-white">
                    <div className="mb-3">
                      <img 
                        src={testimonial.image}
                        alt="Cliente"
                        style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '4px solid white'
                        }}
                      />
                    </div>
                    
                    <div className="mb-3">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={24}
                          fill={index < testimonial.stars ? '#FFD700' : 'none'}
                          stroke={index < testimonial.stars ? '#FFD700' : 'white'}
                          style={{ marginRight: '4px' }}
                        />
                      ))}
                    </div>

                    <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      "{testimonial.text}"
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="justify-content-center mb-5">
            <Col lg={8}>
              <div className="bg-light p-5 rounded text-center">
                <h2 className="fw-bold mb-3">
                  ¿Tu también estas listo para hacer crecer tu negocio?
                </h2>
                <p className="text-muted mb-2">Te regalamos una consultoría de 45 minutos</p>
                <p className="text-primary fw-bold">¡TOTALMENTE GRATIS!</p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
