import { Component, Input } from '@angular/core';

interface Service {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  beforeAfterImages: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @Input() services!: Service[];
  selectedService: Service | null = null;

  openServiceDetails(service: Service) {
    this.selectedService = service;
  }
}
