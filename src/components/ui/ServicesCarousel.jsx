import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ServicesCarousel({ services, currentServiceId }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { 
          slidesToShow: 3, 
          centerMode: false
        }
      },
      {
        breakpoint: 992,
        settings: { 
          slidesToShow: 2, 
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1, 
          centerMode: true,
          centerPadding: '60px',
          infinite: true
        }
      }
    ]
  }

  const filteredServices = services.filter(s => s.id !== currentServiceId)

  return (
    <div style={{ 
      padding: '40px 0',
      maxWidth: '1400px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      <style>
        {`
          .services-carousel .slick-slide {
            padding: 0 10px;
            height: auto;
          }
          .services-carousel .slick-list {
            margin: 0 -10px;
            overflow: visible;
          }
          .services-carousel .slick-track {
            display: flex !important;
          }
          .services-carousel .slick-slide > div {
            height: 100%;
            display: flex;
          }
          .services-carousel .slick-slide .card {
            height: 400px !important;
            display: flex;
            flex-direction: column;
            width: 100% !important;
          }
          
          @media screen and (max-width: 768px) {
            .services-carousel {
              padding: 0 !important;
              margin: 0 !important;
            }
            .services-carousel .slick-slider {
              margin: 0 !important;
            }
            .services-carousel .slick-list {
              margin: 0 !important;
              padding: 0 !important;
              overflow: visible !important;
            }
            .services-carousel .slick-slide {
              padding: 0 10px !important;
              width: calc(100vw - 120px) !important;
              min-width: 280px !important;
              max-width: 350px !important;
            }
            .services-carousel .slick-track {
              display: flex !important;
              align-items: stretch !important;
            }
            .services-carousel .slick-slide > div {
              display: flex !important;
              height: 100% !important;
              width: 100% !important;
            }
            .services-carousel .slick-slide .card {
              width: 100% !important;
              max-width: 100% !important;
              height: 450px !important;
              margin: 0 auto !important;
              flex-shrink: 0 !important;
            }
            .services-carousel .slick-center .card {
              box-shadow: 0 6px 25px rgba(6, 64, 255, 0.25) !important;
              transform: scale(1.02) !important;
            }
            .services-carousel .slick-slide h5 {
              font-size: 1.15rem !important;
            }
            .services-carousel .slick-slide ul {
              font-size: 0.82rem !important;
            }
            .services-carousel .slick-slide .card img {
              height: 150px !important;
            }
          }
        `}
      </style>
      <Slider {...settings} className="services-carousel">
        {filteredServices.map((service) => (
          <div key={service.id}>
            <Card 
              className="shadow border-0 h-100" 
              style={{ 
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#fff'
              }}
            >
              <Card.Img 
                variant="top" 
                src={service.image}
                style={{ 
                  height: '140px', 
                  objectFit: 'cover'
                }}
              />
              <Card.Body className="d-flex flex-column p-3">
                <h5 
                  className="fw-bold mb-3" 
                  style={{ 
                    fontSize: '1.25rem', 
                    lineHeight: '1.3',
                    color: '#0640FF',
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: '700'
                  }}
                >
                  {service.title}
                </h5>
                <ul 
                  className="text-start mb-3" 
                  style={{ 
                    listStyle: 'disc', 
                    paddingLeft: '18px', 
                    fontSize: '0.85rem',
                    color: '#6c757d',
                    flex: 1,
                    fontFamily: 'Roboto, sans-serif',
                    lineHeight: '1.6'
                  }}
                >
                  {service.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: '6px' }}>{feature}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <Button 
                    as={Link} 
                    to={service.link} 
                    variant="link" 
                    className="text-decoration-none p-0 d-inline-flex align-items-center"
                    style={{ 
                      fontSize: '1rem',
                      color: '#0640FF',
                      fontWeight: '600',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Más información 
                    <span style={{ marginLeft: '10px', fontSize: '1.3rem', fontWeight: '600' }}>»</span>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  )
}
