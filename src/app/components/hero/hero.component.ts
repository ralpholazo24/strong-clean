import { Component, Input } from '@angular/core';

interface HeroData {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA: {
    text: string;
    link: string;
  };
  backgroundImage: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() heroData!: HeroData;

  scrollToSection(sectionId: string): void {
    // Remove the '#' if it exists in the link
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
