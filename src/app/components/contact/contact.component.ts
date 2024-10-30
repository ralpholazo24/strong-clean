import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: any;

  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(
      data => this.contact = data.contact
    );
  }

  sendEmail(): void {
    const { name, email, subject, message } = this.formData;
    
    // Format the message body with all details
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;

    // Create mailto URL with encoded parameters
    const mailtoLink = `mailto:${this.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  }
}
