import { Component, Input } from '@angular/core';
import { Testimonial } from '../../models/testimonial.interface';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html'
})
export class TestimonialComponent {
  @Input() testimonials: Testimonial[] = [];
}
