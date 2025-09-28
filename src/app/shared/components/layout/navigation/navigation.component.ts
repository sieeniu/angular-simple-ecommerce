import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, LucideIconData, Menu, ShoppingCart, X } from 'lucide-angular';

import { ButtonComponent } from '../../ui';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, ButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Output() openDrawer = new EventEmitter<void>();

  protected readonly isMenuOpen = signal(false);
  protected readonly Menu: LucideIconData = Menu;
  protected readonly Close: LucideIconData = X;
  protected readonly ShoppingCart: LucideIconData = ShoppingCart;

  protected readonly navigationItems = [
    { label: 'Strona główna', route: '/' },
    { label: 'Produkty', route: '/products' },
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected onToggleDrawer(): void {
    this.openDrawer.emit();
  }
}
