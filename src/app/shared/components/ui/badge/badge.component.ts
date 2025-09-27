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
  @Input() public text = '';
  @Input() public variant: BadgeVariant = 'primary';
  @Input() public size: BadgeSize = 'md';
  @Input() public type: BadgeType = 'solid';
  @Input() public icon?: LucideIconData;
}