import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@core/models';
import { BadgeComponent, ButtonComponent } from '@shared/components/ui';
import { PriceFormatPipe } from '@shared/pipes';
import { LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, PriceFormatPipe, BadgeComponent, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() loading = false;

  @Output() addToCard = new EventEmitter<Product>();

  public readonly Star = Star;

  onAddToCart(): void {
    this.addToCard.emit(this.product);
  }
}
