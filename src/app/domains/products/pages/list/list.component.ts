import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        img: 'https://picsum.photos/240/240?r=20',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 150,
        img: 'https://picsum.photos/240/240?r=21',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 200,
        img: 'https://picsum.photos/240/240?r=22',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 400,
        img: 'https://picsum.photos/240/240?r=23',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 275,
        img: 'https://picsum.photos/240/240?r=24',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 300,
        img: 'https://picsum.photos/240/240?r=25',
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('Estamos en el padre');
    console.log(event);
  }
}
