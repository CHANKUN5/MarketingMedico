import { Container, Row, Col } from 'react-bootstrap'
import ApplicationForm from '../../components/ui/ApplicationForm'

export default function DisenoGrafico() {
  return (
    <>
      <section 
        style={{
          backgroundImage: 'url(/trabajo-diseño.jpg)',
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
                REQUISITOS DEL PUESTO DISEÑO GRÁFICO
              </h2>

              <Row className="justify-content-center mb-5">
                <Col lg={8}>
                  <div className="bg-white p-4 rounded shadow-sm" style={{ border: '1px solid #e0e0e0' }}>
                    <ul className="text-muted mb-0" style={{ fontSize: '1rem', lineHeight: '2' }}>
                      <li>Estudiante de Diseño Gráfico de SENATI.</li>
                      <li>Conocimiento en Adobe Creative Suite (Figma, Photoshop e Illustrator).</li>
                      <li>Creatividad y sentido artístico para redes sociales y entorno digital.</li>
                      <li>Capacidad para trabajar en equipo y adaptarse a un entorno remoto.</li>
                      <li>Responsabilidad y cumplimiento.</li>
                      <li>Conocimiento básico en edición de video.</li>
                    </ul>
                  </div>
                </Col>
              </Row>

              <h3 className="text-primary fw-bold text-center mb-5" style={{ fontSize: '1.8rem' }}>
                ¡SÉ PARTE DE NOSOTROS!
              </h3>

              <Row className="justify-content-center">
                <Col lg={10}>
                  <ApplicationForm vacancyTitle="Diseño Gráfico" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
