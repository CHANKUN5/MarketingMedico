import { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap'
import { Briefcase, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { vacancies } from '../../data/vacancies'

export default function TrabajaConNosotros() {
  const [showModal, setShowModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nombres: '',
    celular: '',
    correo: '',
    linkedin: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false)
    setShowSuccess(true)
    setFormData({
      nombres: '',
      celular: '',
      correo: '',
      linkedin: '',
      mensaje: ''
    })
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <>
      <section 
        className="py-5 text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(13, 110, 253, 0.85)'
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="text-center">
            <Col>
              <h1 className="fw-bold mb-3">REALIZA TUS PRÁCTICAS CON NOSOTROS</h1>
              <p className="lead">
                En Marketing Médico valoramos el talento joven y la innovación.
              </p>
              <p>
                Colaboramos con estudiantes de SENATI que desean adquirir experiencia 
                profesional en el campo del marketing digital, diseño y programación. 
                Nuestro programa de prácticas pre profesionales está diseñado para 
                impulsar tu crecimiento, conocimientos y preparación para el mundo laboral.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold">
                CONOCE NUESTRAS <span className="text-primary">VACANTES DISPONIBLES</span>
              </h2>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            {vacancies.map(vacancy => (
              <Col key={vacancy.id} md={6} lg={4}>
                <Card className="h-100 shadow-sm vacancy-card border-0">
                  <Card.Img 
                    variant="top" 
                    src={vacancy.image}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <h5 className="fw-bold text-center mb-3">{vacancy.title}</h5>
                    <div className="text-center mb-3">
                      <span className="badge bg-success">{vacancy.modality}</span>
                    </div>
                    <p className="text-muted small text-center">{vacancy.description}</p>
                    <Button 
                      variant="primary" 
                      className="w-100 mt-3"
                      onClick={() => setShowModal(true)}
                    >
                      Aplicar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="fw-bold">
                BENEFICIOS DE TRABAJAR CON <span className="text-primary">MARKETING MÉDICO</span>
              </h2>
              <p className="text-muted">
                Te contamos por qué trabajar con nosotros es una experiencia que 
                impulsa tu talento y creatividad.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <Briefcase size={32} className="text-primary" />
                  </div>
                  <h5 className="fw-bold mb-3">Experiencia Profesional</h5>
                  <p className="text-muted small">
                    Aprenderás las bases en los servicios digitales que podrán cumplir 
                    con los estándares y seguir aprendiendo los procesos.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <MapPin size={32} className="text-primary" />
                  </div>
                  <h5 className="fw-bold mb-3">Datos una constancia oficial</h5>
                  <p className="text-muted small">
                    Datos una constancia oficial que respalda tu experiencia 
                    profesional y potencia tu perfil laboral.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <Clock size={32} className="text-primary" />
                  </div>
                  <h5 className="fw-bold mb-3">Capacitaciones Continuas</h5>
                  <p className="text-muted small">
                    Crearás una experiencia única que respaldo tu experiencia 
                    profesional y potencia tu perfil laboral.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <Send size={32} className="text-primary" />
                  </div>
                  <h5 className="fw-bold mb-3">Trabajo 100% Remoto</h5>
                  <p className="text-muted small">
                    Realizás tus prácticas desde casa con todas las herramientas 
                    necesarias para un entorno profesional y colaborativo.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>¿Tu también estas listo para hacer crecer tu negocio?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted small mb-4">
            Te regalamos una consultoria de 45 minutos ¡TOTALMENTE GRATIS!
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nombres"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                placeholder="Celular"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Correo profesional"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="url"
                placeholder="Link de tu página web/red social"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="primary" size="lg" className="px-5">
                Enviar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal 
        show={showSuccess} 
        onHide={() => setShowSuccess(false)} 
        centered
        className="success-modal"
      >
        <Modal.Body className="text-center p-5 bg-primary text-white">
          <CheckCircle size={64} className="mb-3" />
          <h3 className="fw-bold mb-3">¡Envío exitoso!</h3>
          <p className="mb-0">
            Gracias por su confianza, en breve un asistente se va a comunicar con usted.
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}