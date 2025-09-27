import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { Product } from '@core/models';

import { ProductsService } from '../../services';
import { ProductCardComponent } from '../product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  protected readonly products = signal<Product[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  public readonly productsService = inject(ProductsService);

  protected addToCard = output<Product>();

  constructor() {
    this.fetchProducts();
  }

  public onAddToCard(product: Product) {
    console.log(product);
  }

  private fetchProducts() {
    this.loading.set(true);
    this.error.set(null);

    this.productsService.getElectronics().subscribe({
      next: (products) => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.error.set('Error fetching products. Please try again later.');
        this.loading.set(false);
      },
    });
  }
}
