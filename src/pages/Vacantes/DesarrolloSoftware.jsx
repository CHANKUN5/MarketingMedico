import { Container, Row, Col } from 'react-bootstrap'
import ApplicationForm from '../../components/ui/ApplicationForm'

export default function DesarrolloSoftware() {
  return (
    <>
      <section 
        style={{
          backgroundImage: 'url("/wmremove-transformed (3).jpeg")',
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
            background: 'rgba(6, 64, 255, 0.7)'
          }}
        />
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="text-primary fw-bold text-center mb-5" style={{ fontSize: '2rem' }}>
                REQUISITOS DEL PUESTO<br />DESARROLLO SOFTWARE
              </h2>

              <Row className="justify-content-center mb-5">
                <Col lg={8}>
                  <div className="bg-white p-4 rounded shadow-sm" style={{ border: '1px solid #e0e0e0' }}>
                    <ul className="text-muted mb-0" style={{ fontSize: '1rem', lineHeight: '2' }}>
                      <li>Estudiante de la carrera de Desarrollo de Software o Ingeniería de Software de SENATI.</li>
                      <li>Conocimientos básicos en HTML, CSS, JavaScript y bases de datos.</li>
                      <li>Familiaridad con herramientas de diseño UX/UI y trabajo colaborativo con diseñadores.</li>
                      <li>Capacidad para implementar o mantener sitios web y sistemas internos.</li>
                      <li>Interés en inteligencia artificial, automatización y soluciones digitales.</li>
                      <li>Proactividad, trabajo remoto responsable y buena comunicación con el equipo.</li>
                    </ul>
                  </div>
                </Col>
              </Row>

              <h3 className="text-primary fw-bold text-center mb-5" style={{ fontSize: '1.8rem' }}>
                ¡SÉ PARTE DE NOSOTROS!
              </h3>

              <Row className="justify-content-center">
                <Col lg={10}>
                  <ApplicationForm vacancyTitle="Desarrollo de Software" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
