import { Container, Row, Col, Card } from 'react-bootstrap'
import { Users, Award, Heart, Lightbulb, Target, Briefcase } from 'lucide-react'

export default function Nosotros() {
  return (
    <>
      <section 
        style={{
          backgroundImage: 'url(/Nosotros.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          height: '450px'
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
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary fw-bold mb-4" style={{ fontSize: '2rem' }}>
                SOBRE MARKETING MÉDICO
              </h2>
              <p className="text-muted" style={{ maxWidth: '1000px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.8' }}>
                Marketing Médico comenzó como una agencia digital para distintos rubros, pero con el tiempo se especializó en el sector salud. Actualmente, ayuda a clínicas médicas a fortalecer su presencia digital y mejorar su gestión interna mediante estrategias digitales y desarrollo de software especializado.
              </p>
            </Col>
          </Row>

          <Row className="g-4 mb-5 justify-content-center">
            <Col md={6} lg={5}>
              <Card className="h-100 border shadow-sm" style={{ borderRadius: '15px', borderColor: '#e0e0e0' }}>
                <Card.Body className="text-center p-4">
                  <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#FFD4D4', borderRadius: '12px' }}>
                    <Users size={40} style={{ color: '#FF0006' }} />
                  </div>
                  <div className="mb-3">
                    <span className="badge" style={{ backgroundColor: '#FFD4D4', color: '#FF0006', fontSize: '0.9rem', padding: '8px 16px' }}>
                      Nuestra misión
                    </span>
                  </div>
                  <p className="text-dark" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                    Impulsar el crecimiento de clínicas y profesionales de la salud mediante estrategias de marketing digital y herramientas tecnológicas integradas.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={5}>
              <Card className="h-100 border shadow-sm" style={{ borderRadius: '15px', borderColor: '#e0e0e0' }}>
                <Card.Body className="text-center p-4">
                  <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#FFD4D4', borderRadius: '12px' }}>
                    <Award size={40} style={{ color: '#FF0006' }} />
                  </div>
                  <div className="mb-3">
                    <span className="badge" style={{ backgroundColor: '#FFD4D4', color: '#FF0006', fontSize: '0.9rem', padding: '8px 16px' }}>
                      Nuestra visión
                    </span>
                  </div>
                  <p className="text-dark" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                    Ser la agencia líder en marketing médico, reconocida por ofrecer soluciones innovadoras y sostenibles que generen resultados reales.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary fw-bold mb-3" style={{ fontSize: '2rem' }}>
                NUESTROS VALORES
              </h2>
              <p className="text-muted">
                Los principios que guían cada una de nuestras acciones y decisiones.
              </p>
            </Col>
          </Row>

          <Row className="g-5 mb-5">
            <Col md={4}>
              <div className="text-center">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#E8D4FF', borderRadius: '12px' }}>
                  <Users size={48} style={{ color: '#6C05FF' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Compromiso</h5>
                <p className="text-muted">
                  Nos involucramos en cada proyecto como si fuera propio.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#E8D4FF', borderRadius: '12px' }}>
                  <Award size={48} style={{ color: '#6C05FF' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Excelencia</h5>
                <p className="text-muted">
                  Buscamos siempre la máxima calidad en nuestros servicios.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#E8D4FF', borderRadius: '12px' }}>
                  <Heart size={48} style={{ color: '#6C05FF' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Empatía</h5>
                <p className="text-muted">
                  Entendemos las necesidades del sector salud y bienestar.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-5">
            <Col md={4}>
              <div className="text-center">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#E8D4FF', borderRadius: '12px' }}>
                  <Lightbulb size={48} style={{ color: '#6C05FF' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Innovación</h5>
                <p className="text-muted">
                  Aplicamos inteligencia artificial en todos nuestros procesos, desarrollando software basado en IA y agentes inteligentes.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#E8D4FF', borderRadius: '12px' }}>
                  <Target size={48} style={{ color: '#6C05FF' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Ética</h5>
                <p className="text-muted">
                  Priorizamos prácticas transparentes y responsables.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#E8D4FF', borderRadius: '12px' }}>
                  <Briefcase size={48} style={{ color: '#6C05FF' }} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#000' }}>Innovación</h5>
                <p className="text-muted">
                  Aplicamos inteligencia artificial en nuestros procesos, desarrollando software basado en IA
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary fw-bold" style={{ fontSize: '2rem' }}>
                RESEÑA
              </h2>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
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
        </Container>
      </section>
    </>
  )
}
