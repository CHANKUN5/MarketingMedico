import Slider from 'react-slick'
import { Container } from 'react-bootstrap'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80',
    title: 'Transformamos tu Presencia Digital',
    subtitle: 'Marketing especializado para el sector salud'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80',
    title: 'Conecta con tus Pacientes',
    subtitle: 'Estrategias efectivas de marketing médico'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1600&q=80',
    title: 'Innovación y Tecnología',
    subtitle: 'Soluciones digitales para clínicas modernas'
  }
]

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  }

  return (
    <div className="hero-slider" style={{ height: '80vh', minHeight: '600px', position: 'relative' }}>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} style={{ height: '80vh', minHeight: '600px' }}>
            <div 
              className="hero-slide"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                height: '80vh',
                minHeight: '600px'
              }}
            >
              <div className="hero-overlay" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: '100%'
              }}>
                <Container style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  height: '100%'
                }}>
                  <div className="text-center text-white">
                    <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
                    <p className="lead mb-4">{slide.subtitle}</p>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style>{`
        .hero-slider .slick-dots {
          position: absolute !important;
          bottom: 40px !important;
          left: 0 !important;
          right: 0 !important;
          margin: 0 !important;
          z-index: 100 !important;
        }
        .hero-slider .slick-dots li {
          margin: 0 15px !important;
        }
        .hero-slider .slick-dots li button:before {
          font-size: 25px !important;
          opacity: 0.5 !important;
          color: white !important;
        }
        .hero-slider .slick-dots li.slick-active button:before {
          opacity: 1 !important;
          font-size: 25px !important;
          color: white !important;
        }
        .hero-slider .slick-dots li button:hover:before {
          opacity: 0.75 !important;
        }
      `}</style>
    </div>
  )
}