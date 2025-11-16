import { useState, useRef } from 'react'
import { Form, Button, Modal, Row, Col } from 'react-bootstrap'
import { CheckCircle } from 'lucide-react'

export default function ApplicationForm({ vacancyTitle }) {
  const [showSuccess, setShowSuccess] = useState(false)
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef(null)
  const [formData, setFormData] = useState({
    nombres: '',
    celular: '',
    correo: '',
    carrera: ''
  })
  const [errors, setErrors] = useState({})

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

  const handleFileClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      console.log('Archivo seleccionado:', file.name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Formulario enviado:', { ...formData, vacancy: vacancyTitle, cv: fileName })
      setShowSuccess(true)
      setFormData({
        nombres: '',
        celular: '',
        correo: '',
        carrera: ''
      })
      setFileName('')
      setErrors({})
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  return (
    <>
      <div className="p-5 rounded" style={{ backgroundColor: '#E8F0FF' }}>
        <Row>
          <Col md={5} className="mb-4 mb-md-0">
            <img 
              src="/cita.webp" 
              alt="Contacto" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            />
          </Col>
          <Col md={7}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="text-primary fw-bold">Nombres y Apellidos:</Form.Label>
                <Form.Control
                  type="text"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  isInvalid={!!errors.nombres}
                  style={{ borderRadius: '8px' }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombres}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-primary fw-bold">Celular:</Form.Label>
                <Form.Control
                  type="text"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  isInvalid={!!errors.celular}
                  maxLength={9}
                  style={{ borderRadius: '8px' }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.celular}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-primary fw-bold">Correo institucional (senati.pe):</Form.Label>
                <Form.Control
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  isInvalid={!!errors.correo}
                  style={{ borderRadius: '8px' }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.correo}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="text-primary fw-bold">Carrera Técnica:</Form.Label>
                <Form.Control
                  type="text"
                  name="carrera"
                  value={formData.carrera}
                  onChange={handleChange}
                  style={{ borderRadius: '8px' }}
                />
              </Form.Group>

              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                style={{ display: 'none' }}
              />

              <div className="d-flex gap-3 justify-content-center">
                <Button 
                  type="button"
                  variant="primary"
                  onClick={handleFileClick}
                  style={{ 
                    borderRadius: '8px', 
                    padding: '12px 35px',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}
                >
                  Adjuntar CV
                </Button>
                <Button 
                  type="submit" 
                  variant="primary"
                  style={{ 
                    borderRadius: '8px', 
                    padding: '12px 35px',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}
                >
                  Enviar
                </Button>
              </div>
              {fileName && (
                <p className="text-center text-success mt-3 mb-0">
                  Archivo seleccionado: {fileName}
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </div>

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
