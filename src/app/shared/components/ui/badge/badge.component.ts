import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

import { BadgeSize, BadgeType, BadgeVariant } from './badge.types';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() text = '';
  @Input() variant: BadgeVariant = 'primary';
  @Input() size: BadgeSize = 'md';
  @Input() type: BadgeType = 'solid';
  @Input() icon?: LucideIconData;
}
