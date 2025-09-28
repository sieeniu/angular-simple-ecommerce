import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from '@shared/components/ui/drawer/drawer.component';

import { FooterComponent } from './footer';
import { NavigationComponent } from './navigation';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, FooterComponent, DrawerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @ViewChild('drawer') drawer!: DrawerComponent;

  protected onDrawerToggle(): void {
    this.drawer.toggle();
  }
}
