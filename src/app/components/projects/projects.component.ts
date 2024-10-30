import { Component, Input } from '@angular/core';

interface Project {
  name: string;
  serviceIds: number[];
  location: string;
  country: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() projects!: { title: string; list: Project[] };
  @Input() services!: any[];

  getService(serviceId: number) {
    return this.services?.find(s => s.id === serviceId);
  }
}
