import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer: any;
  currentYear = new Date().getFullYear();

  constructor(
    private contentService: ContentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contentService.getContent().subscribe(
      data => this.footer = data.footer
    );
  }

  navigateToSection(route: string, fragment: string | undefined) {
    if (this.router.url !== route) {
      this.router.navigate([route], { fragment });
    } else if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
} 