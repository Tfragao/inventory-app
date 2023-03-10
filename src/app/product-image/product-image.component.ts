import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-image',
  template: `
 <img class="product-image" [src]="product?.imageUrl">
 `
})
export class ProductImageComponent {
    @Input() product : Product | undefined;
    @HostBinding('attr.class') cssClass = 'ui small image';
}
