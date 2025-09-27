import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@core/models';
import { BadgeComponent, ButtonComponent } from '@shared/components';
import { PriceFormatPipe } from '@shared/pipes';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, PriceFormatPipe, BadgeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() public product!: Product;
  @Input() public loading = false;

  @Output() addToCard = new EventEmitter<Product>();

  onAddToCart(): void {
    this.addToCard.emit(this.product);
  }
}
