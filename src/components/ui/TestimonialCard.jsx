import { Card } from 'react-bootstrap'
import { Star } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <Card className="h-100 shadow-sm testimonial-card border-0">
      <Card.Body className="text-center p-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="rounded-circle mb-3"
          width="80"
          height="80"
          style={{ objectFit: 'cover' }}
        />
        <h5 className="fw-bold mb-1">{testimonial.position}</h5>
        <p className="text-muted small mb-2">{testimonial.years}</p>
        <div className="rating-stars mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        <p className="text-muted fst-italic small mb-0">
          "{testimonial.comment}"
        </p>
      </Card.Body>
    </Card>
  )
}