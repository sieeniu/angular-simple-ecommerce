import { Component, Input, signal } from '@angular/core';
import { ButtonComponent } from '@shared/components/ui';

@Component({
  selector: 'app-drawer',
  standalone: true,
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
  imports: [ButtonComponent],
})
export class DrawerComponent {
  @Input() position: 'left' | 'right' = 'right';

  isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  toggle(): void {
    this.isOpen.update((state) => !state);
  }
}
