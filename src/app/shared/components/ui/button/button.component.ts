import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonSize, ButtonVariant } from './button.types';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;

  @Output() clicked = new EventEmitter<MouseEvent>();

  public onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
