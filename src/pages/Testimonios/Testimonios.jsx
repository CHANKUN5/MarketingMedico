import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import TestimonialCard from '../../components/ui/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function Testimonios() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <>
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="fw-bold mb-3">Testimonios</h1>
              <p className="lead">Lo que dicen nuestros clientes</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center fw-bold mb-3">
                ¿QUÉ SE DICE DE <span className="text-primary">NUESTROS SER VICIOS?</span>
              </h2>
            </Col>
          </Row>

          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="px-2">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="fw-bold">CONOCE A NUESTROS PRACTICANTES</h2>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            {[1, 2, 3, 4].map(i => (
              <Col key={i} sm={6} md={3}>
                <div className="text-center">
                  <img
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                    alt={`Practicante ${i}`}
                    className="rounded-circle mb-3 shadow"
                    width="120"
                    height="120"
                    style={{ objectFit: 'cover' }}
                  />
                  <h6 className="fw-bold">Puesto dentro de la empresa</h6>
                  <p className="text-muted small">Años en la empresa</p>
                  <p className="text-muted small fst-italic">"Comentario de su experiencia"</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}