import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductListComponent } from '@features/products/components/product-list/product-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {}
