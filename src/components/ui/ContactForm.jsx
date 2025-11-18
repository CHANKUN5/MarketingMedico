import { useState } from 'react'
import { Card, Form, Button, Modal } from 'react-bootstrap'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    email: '',
    link: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }

    if (!formData.celular.trim()) {
      newErrors.celular = 'El celular es requerido'
    } else if (!/^\d{9}$/.test(formData.celular.trim())) {
      newErrors.celular = 'El celular debe tener 9 dígitos'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo no es válido'
    }

    // El campo link es opcional, no se valida

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'celular') {
      const numericValue = value.replace(/\D/g, '').slice(0, 9)
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Formulario enviado:', formData)
      setShowModal(true)
      setFormData({
        nombre: '',
        celular: '',
        email: '',
        link: '',
        mensaje: ''
      })
      setErrors({})
    }
  }

  return (
    <>
      <Card className="shadow-lg border-0" style={{ backgroundColor: '#0640FF' }}>
        <Card.Body className="p-4">
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Nombres</Form.Label>
              <Form.Control 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={errors.nombre ? 'is-invalid' : ''}
              />
              {errors.nombre && (
                <div className="text-white mt-1 small">
                  ⚠️ {errors.nombre}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Celular</Form.Label>
              <Form.Control 
                type="text" 
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                maxLength={9}
                className={errors.celular ? 'is-invalid' : ''}
              />
              {errors.celular && (
                <div className="text-white mt-1 small">
                  ⚠️ {errors.celular}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Correo profesional</Form.Label>
              <Form.Control 
                type="text" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'is-invalid' : ''}
              />
              {errors.email && (
                <div className="text-white mt-1 small">
                  ⚠️ {errors.email}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">
                Link de tu página web/red social <span className="fw-normal">(opcional)</span>
              </Form.Label>
              <Form.Control 
                type="text" 
                name="link"
                value={formData.link}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white fw-bold">Mensaje</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className={errors.mensaje ? 'is-invalid' : ''}
              />
              {errors.mensaje && (
                <div className="text-white mt-1 small">
                  ⚠️ {errors.mensaje}
                </div>
              )}
            </Form.Group>

            <div className="text-center">
              <Button 
                type="submit"
                variant="light" 
                size="lg" 
                className="px-5 fw-bold"
                style={{ borderRadius: '25px' }}
              >
                Enviar →
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center p-5" style={{ backgroundColor: '#0640FF' }}>
          <div className="text-white">
            <h2 className="fw-bold mb-3">¡Envío exitoso!</h2>
            <p className="mb-4">Gracias por su confianza, en breve un asistente se va a comunicar con usted.</p>
            <Button 
              variant="light" 
              onClick={() => setShowModal(false)}
              className="px-4"
            >
              Cerrar
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
