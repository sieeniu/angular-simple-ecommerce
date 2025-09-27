import { Component, Input } from '@angular/core';

import { BadgeSize, BadgeType, BadgeVariant } from './badge.types';

@Component({
  selector: 'app-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() public text = '';
  @Input() public variant: BadgeVariant = 'primary';
  @Input() public size: BadgeSize = 'md';
  @Input() public type: BadgeType = 'solid';
}
