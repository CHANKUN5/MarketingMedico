import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service }) {
  return (
    <Card className="h-100 shadow-sm service-card">
      <Card.Img 
        variant="top" 
        src={service.image}
        alt={service.title}
        style={{ height: '220px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-primary fw-bold">
          {service.title}
        </Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {service.description}
        </Card.Text>
        <Button 
          as={Link} 
          to={service.link} 
          variant="primary"
          className="mt-auto"
        >
          Más información <ArrowRight size={16} className="ms-1" />
        </Button>
      </Card.Body>
    </Card>
  )
}