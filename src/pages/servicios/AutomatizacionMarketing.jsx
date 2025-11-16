import { Container, Row, Col } from 'react-bootstrap'
import { services } from '../../data/services'
import ContactForm from '../../components/ui/ContactForm'
import ServicesCarousel from '../../components/ui/ServicesCarousel'

export default function AutomatizacionMarketing() {
  const currentService = services[2]

  return (
    <>
      <section 
        style={{
          position: 'relative',
          height: '500px',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            backgroundImage: 'url("/3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(6, 64, 255, 0.7)',
            zIndex: 2
          }}
        />
      </section>

      <section style={{ paddingTop: '80px', paddingBottom: '30px', backgroundColor: '#fff' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center">
                <h2 className="fw-bold text-primary mb-4">
                  AUTOMATIZACIÓN DEL MARKETING
                </h2>
                <p className="text-dark mb-4" style={{ fontSize: '1.1rem' }}>
                  Creación de flujos automatizados para optimizar tu comunicación con pacientes.
                </p>
                <p className="text-primary fw-bold mb-0" style={{ fontSize: '1rem' }}>
                  INCLUYE: Correos automatizados, notificaciones y estrategias de fidelización.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-white" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <Container>
          <Row className="justify-content-center mb-5">
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

          <Row style={{ marginTop: '30px' }}>
            <Col>
              <h2 className="text-center text-primary" style={{ fontWeight: '700', fontSize: '2rem', marginBottom: '30px', fontFamily: 'Satoshi, sans-serif' }}>OTROS SERVICIOS</h2>
              <ServicesCarousel services={services} currentServiceId={currentService.id} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
