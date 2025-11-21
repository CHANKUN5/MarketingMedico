import Slider from 'react-slick'
import { Container } from 'react-bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    id: 1,
    image: '/Home.jpeg',
    title: 'Transformamos tu Presencia Digital',
    subtitle: 'Marketing especializado para el sector salud'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80',
    title: 'Conecta con tus Pacientes',
    subtitle: 'Estrategias efectivas de marketing médico'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1920&q=80',
    title: 'Innovación y Tecnología',
    subtitle: 'Soluciones digitales para clínicas modernas'
  }
]

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: false
  }

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <div 
              className="hero-slide"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '70vh',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Container>
                <div className="text-center text-white">
                  <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
                  <p className="lead fs-4">{slide.subtitle}</p>
                </div>
              </Container>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
