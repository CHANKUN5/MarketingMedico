import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, Target } from 'lucide-react'
import HeroSlider from '../../components/ui/HeroSlider'
import ContactForm from '../../components/ui/ContactForm'
import ServicesCarousel from '../../components/ui/ServicesCarousel'
import { services } from '../../data/services'

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3" style={{ color: '#000' }}>
                ¿QUIÉNES SOMOS <span className="text-primary">NOSOTROS?</span>
              </h2>
              <p className="text-muted" style={{ fontSize: '1rem' }}>
                Somos una agencia que une creatividad y tecnología para fortalecer la presencia digital de profesionales y clínicas, generando confianza y conexión con sus pacientes.
              </p>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col md={4}>
              <div className="text-center p-4">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#E8D4FF', borderRadius: '12px' }}>
                  <Users size={40} style={{ color: '#7C3AED' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Compromiso y ética</h5>
                <p className="text-muted">
                  Trabajamos con responsabilidad y transparencia, involucrándote en cada proyecto como si fuera propio.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#C4F4E0', borderRadius: '12px' }}>
                  <Award size={40} style={{ color: '#10B981' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Innovación y excelencia</h5>
                <p className="text-muted">
                  Comprendemos las necesidades del sector salud y bienestar para ofrecer soluciones adecuadas.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#FFD4D4', borderRadius: '12px' }}>
                  <Target size={40} style={{ color: '#EF4444' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Empatía</h5>
                <p className="text-muted">
                  Combinamos tecnología e inteligencia artificial para crear estrategias efectivas y de alta calidad.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-primary" style={{ fontWeight: '700', fontSize: '2rem', fontFamily: 'Satoshi, sans-serif' }}>
                NUESTROS SERVICIOS
              </h2>
            </Col>
          </Row>
          <ServicesCarousel services={services} />
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-primary mb-3" style={{ fontWeight: '700', fontSize: '2rem', fontFamily: 'Satoshi, sans-serif' }}>
                ¿QUÉ SE DICE DE <span className="text-primary">NUESTROS SERVICIOS?</span>
              </h2>
            </Col>
          </Row>

          <Row className="g-4 mb-4 justify-content-center">
            <Col md={6}>
              <div className="bg-primary text-white p-4 rounded shadow" style={{ minHeight: '200px' }}>
                <div className="text-center mb-3">
                  <div className="text-warning mb-2" style={{ fontSize: '2rem' }}>★★★★☆</div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="/reseña 1.png" 
                    alt="Reseña" 
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <p className="mb-0 ms-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                    "Gracias a Marketing Médico logramos llegar a más pacientes y mejorar nuestra presencia digital. El equipo siempre está atento a nuestras necesidades."
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-primary text-white p-4 rounded shadow" style={{ minHeight: '200px' }}>
                <div className="text-center mb-3">
                  <div className="text-warning mb-2" style={{ fontSize: '2rem' }}>★★★★☆</div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="/reseña 2.png" 
                    alt="Reseña" 
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <p className="mb-0 ms-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                    "Gracias a Marketing Médico por su excelente trabajo. Su apoyo ha sido clave para que nuestra clínica dental crezca y llegue a más pacientes. Muy buena atención y resultados visibles."
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="text-center">
            <Col>
              <Button 
                as={Link} 
                to="/testimonios" 
                variant="primary"
                size="lg"
                className="fw-bold"
                style={{ 
                  borderRadius: '50px', 
                  padding: '16px 50px',
                  fontSize: '1.2rem',
                  backgroundColor: '#0640FF',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(6, 64, 255, 0.3)'
                }}
              >
                Más información <span style={{ marginLeft: '8px' }}>»</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg={8}>
              <div className="bg-light p-4 rounded text-center mb-4">
                <h5 className="fw-bold text-dark mb-2">
                  ¿Tu también estas listo para hacer crecer tu negocio?
                </h5>
                <p className="text-muted mb-2">Te regalamos una consultoría de 45 minutos</p>
                <p className="text-primary fw-bold">¡TOTALMENTE GRATIS!</p>
              </div>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-primary" style={{ fontWeight: '700', fontSize: '2rem', fontFamily: 'Satoshi, sans-serif' }}>
                CONOCE A NUESTROS PRACTICANTES
              </h2>
            </Col>
          </Row>
          <style>
            {`
              .practicante-img {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
              }
              .practicante-img:hover {
                transform: translateY(-10px);
                box-shadow: 0 10px 25px rgba(6, 64, 255, 0.3) !important;
              }
            `}
          </style>
          <Row className="justify-content-center">
            <Col xs={6} sm={3} className="text-center mb-3">
              <img 
                src="/testimonio1.png" 
                alt="Practicante" 
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
                className="shadow practicante-img"
              />
            </Col>
            <Col xs={6} sm={3} className="text-center mb-3">
              <img 
                src="/testimonio 2.png" 
                alt="Practicante" 
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
                className="shadow practicante-img"
              />
            </Col>
            <Col xs={6} sm={3} className="text-center mb-3">
              <img 
                src="/testimonio 3.png" 
                alt="Practicante" 
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
                className="shadow practicante-img"
              />
            </Col>
            <Col xs={6} sm={3} className="text-center mb-3">
              <img 
                src="/testimonio 4.png" 
                alt="Practicante" 
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
                className="shadow practicante-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3 className="fw-bold mb-3">
                ¿Estás tú también listo para unirte a nuestro equipo?
              </h3>
              <p className="mb-0">
                Te redirigimos a la postulación para que seas parte de este asombroso equipo
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
                Postular ahora <ArrowRight className="ms-2" size={20} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}