import { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export default function TrabajaConNosotros() {
  const [showModal, setShowModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedVacancy, setSelectedVacancy] = useState(null)
  const [formData, setFormData] = useState({
    nombres: '',
    celular: '',
    correo: '',
    linkedin: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState({})

  const vacancies = [
    {
      id: 1,
      title: 'Diseño Gráfico',
      modality: '100% REMOTO',
      description: 'Buscamos diseñador gráfico con experiencia en marketing digital y sector salud.',
      image: '/trabajo-diseño.jpg',
      link: '/vacantes/diseno-grafico'
    },
    {
      id: 2,
      title: 'Desarrollo de Software',
      modality: '100% REMOTO',
      description: 'Desarrollador full stack para proyectos web del sector médico.',
      image: '/wmremove-transformed (3).jpeg',
      link: '/vacantes/desarrollo-software'
    }
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombres.trim()) {
      newErrors.nombres = 'El nombre es requerido'
    }

    if (!formData.celular.trim()) {
      newErrors.celular = 'El celular es requerido'
    } else if (!/^\d{9}$/.test(formData.celular.trim())) {
      newErrors.celular = 'El celular debe tener 9 dígitos'
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'celular') {
      const numericValue = value.replace(/\D/g, '')
      setFormData({
        ...formData,
        [name]: numericValue
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleApply = (vacancy) => {
    setSelectedVacancy(vacancy)
    setShowModal(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Formulario enviado:', formData)
      setShowModal(false)
      setShowSuccess(true)
      setFormData({
        nombres: '',
        celular: '',
        correo: '',
        linkedin: '',
        mensaje: ''
      })
      setErrors({})
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  return (
    <>
      <section 
        style={{
          backgroundImage: 'url(/agendar.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          height: '400px'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(6, 64, 255, 0.7)'
          }}
        />
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-primary fw-bold mb-4" style={{ fontSize: '2rem' }}>
                REALIZA TUS PRÁCTICAS CON NOSOTROS
              </h2>
              <p className="text-muted mb-3" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem' }}>
                En Marketing Médico valoramos el talento joven y la innovación.
              </p>
              <p className="text-muted" style={{ maxWidth: '1000px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.8' }}>
                Colaboramos con estudiantes de SENATI que desean adquirir experiencia profesional en el campo del marketing digital, diseño y programación. Nuestro programa de prácticas ofrece un espacio donde podrán aplicar sus conocimientos en proyectos reales, impulsando su crecimiento, conocimientos y preparación para el mundo laboral.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold" style={{ color: '#000' }}>
                CONOCE NUESTRAS <span className="text-primary">VACANTES DISPONIBLES</span>
              </h2>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            {vacancies.map(vacancy => (
              <Col key={vacancy.id} md={6} lg={5}>
                <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px', overflow: 'hidden', maxWidth: '450px', margin: '0 auto' }}>
                  <Card.Img 
                    variant="top" 
                    src={vacancy.image}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column p-3">
                    <h5 className="fw-bold text-center mb-2" style={{ color: '#000', fontSize: '1.3rem' }}>{vacancy.title}</h5>
                    <div className="text-center mb-2">
                      <span className="badge bg-success" style={{ fontSize: '0.85rem', padding: '6px 16px' }}>
                        {vacancy.modality}
                      </span>
                    </div>
                    <p className="text-muted text-center mb-3" style={{ flex: 1, fontSize: '0.95rem' }}>
                      {vacancy.description}
                    </p>
                    <Button 
                      as={Link}
                      to={vacancy.link}
                      variant="primary" 
                      className="w-100"
                      style={{
                        borderRadius: '8px',
                        padding: '10px',
                        fontWeight: '600',
                        fontSize: '1rem'
                      }}
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

      <section className="py-5" style={{ backgroundColor: '#F0F4FF' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary fw-bold mb-3" style={{ fontSize: '2rem' }}>
                BENEFICIOS DE TRABAJAR CON MARKETING MÉDICO
              </h2>
              <p className="text-muted">
                Te contamos por qué trabajar con nosotros es una experiencia que impulsa tu talento y creatividad.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm bg-white" style={{ borderRadius: '15px' }}>
                <Card.Body className="text-center p-4">
                  <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#D4FFE0', borderRadius: '12px' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#00D829" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="#00D829" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#00D829' }}>Flexibilidad de Horario</h5>
                  <p className="text-muted">
                    Entendemos que estás en formación. Ajustamos los horarios para que puedas cumplir con tus estudios y seguir aprendiendo sin presiones.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm bg-white" style={{ borderRadius: '15px' }}>
                <Card.Body className="text-center p-4">
                  <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#D4FFE0', borderRadius: '12px' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#00D829" strokeWidth="2"/>
                      <path d="M9 11L11 13L15 9" stroke="#00D829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#00D829' }}>Prácticas Certificadas</h5>
                  <p className="text-muted">
                    Obtén una constancia oficial que respalde tu experiencia profesional y potencie tu perfil laboral.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm bg-white" style={{ borderRadius: '15px' }}>
                <Card.Body className="text-center p-4">
                  <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#D4FFE0', borderRadius: '12px' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#00D829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#00D829' }}>Capacitaciones Continuas</h5>
                  <p className="text-muted">
                    Obtén una constancia oficial que respalde tu experiencia profesional y potencie tu perfil laboral.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm bg-white" style={{ borderRadius: '15px' }}>
                <Card.Body className="text-center p-4">
                  <div className="d-inline-flex p-3 mb-3" style={{ backgroundColor: '#D4FFE0', borderRadius: '12px' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="7" width="20" height="14" rx="2" stroke="#00D829" strokeWidth="2"/>
                      <path d="M8 3V7M16 3V7" stroke="#00D829" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M2 11H22" stroke="#00D829" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#00D829' }}>Trabajo 100% Remoto</h5>
                  <p className="text-muted">
                    Realiza tus prácticas desde casa con todas las herramientas necesarias para un entorno profesional y colaborativo.
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
              <h2 className="text-primary fw-bold" style={{ fontSize: '2rem' }}>
                CONOCE A NUESTROS PRACTICANTES
              </h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6}>
              <Card className="border-0 shadow-sm" style={{ borderRadius: '20px', backgroundColor: '#F0F4FF' }}>
                <Card.Body className="d-flex align-items-center p-4">
                  <img 
                    src="/testimonio1.png"
                    alt="Practicante" 
                    style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }}
                    className="me-4"
                  />
                  <div style={{ flex: 1 }}>
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>Diseñador Gráfico Digital</h5>
                    <p className="text-muted mb-1" style={{ fontSize: '0.95rem' }}>8 meses en la empresa</p>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>"Ambiente creativo y lleno de buenas experiencias."</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm" style={{ borderRadius: '20px', backgroundColor: '#F0F4FF' }}>
                <Card.Body className="d-flex align-items-center p-4">
                  <img 
                    src="/testimonio 2.png"
                    alt="Practicante" 
                    style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }}
                    className="me-4"
                  />
                  <div style={{ flex: 1 }}>
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>Diseñadora Gráfica Digital</h5>
                    <p className="text-muted mb-1" style={{ fontSize: '0.95rem' }}>1 año en la empresa</p>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>" Un lugar donde aprendí edición y maquetación web en un buen ambiente."</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm" style={{ borderRadius: '20px', backgroundColor: '#F0F4FF' }}>
                <Card.Body className="d-flex align-items-center p-4">
                  <img 
                    src="/testimonio 3.png"
                    alt="Practicante" 
                    style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }}
                    className="me-4"
                  />
                  <div style={{ flex: 1 }}>
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>Programadora</h5>
                    <p className="text-muted mb-1" style={{ fontSize: '0.95rem' }}>1 año en la empresa</p>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>"Un lugar donde fortalecí mis habilidades de programación y trabajo en equipo."</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm" style={{ borderRadius: '20px', backgroundColor: '#F0F4FF' }}>
                <Card.Body className="d-flex align-items-center p-4">
                  <img 
                    src="/testimonio 4.png"
                    alt="Practicante" 
                    style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }}
                    className="me-4"
                  />
                  <div style={{ flex: 1 }}>
                    <h5 className="fw-bold mb-2" style={{ color: '#000' }}>Programadora</h5>
                    <p className="text-muted mb-1" style={{ fontSize: '0.95rem' }}>1 mes en la empresa</p>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>"Excelente lugar para aprender y mejorar en programación."</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Aplicar a {selectedVacancy?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nombres"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                isInvalid={!!errors.nombres}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombres}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Celular (9 dígitos)"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                isInvalid={!!errors.celular}
                maxLength={9}
              />
              <Form.Control.Feedback type="invalid">
                {errors.celular}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Correo profesional"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                isInvalid={!!errors.correo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.correo}
              </Form.Control.Feedback>
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
      >
        <Modal.Body className="text-center p-5 bg-primary text-white">
          <CheckCircle size={64} className="mb-3" />
          <h3 className="fw-bold mb-3">¡Envío exitoso!</h3>
          <p className="mb-0">
            Gracias por tu interés, en breve un asistente se va a comunicar contigo.
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}
