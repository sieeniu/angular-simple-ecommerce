import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, LucideIconData, Mail, MapPin, Phone } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly Mail: LucideIconData = Mail;
  protected readonly Phone: LucideIconData = Phone;
  protected readonly MapPin: LucideIconData = MapPin;

  protected readonly currentYear = new Date().getFullYear();

  protected readonly footerLinks = {
    company: [
      { label: 'O nas', route: '/about' },
      { label: 'Blog', route: '/blog' },
    ],
    support: [
      { label: 'Kontakt', route: '/contact' },
      { label: 'FAQ', route: '/faq' },
    ],
    legal: [
      { label: 'Regulamin', route: '/terms' },
      { label: 'Polityka prywatności', route: '/privacy' },
      { label: 'Reklamacje', route: '/complaints' },
    ],
  };
}
