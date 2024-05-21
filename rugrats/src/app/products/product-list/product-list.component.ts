import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { 
      name: 'Camisa', 
      date: '21/02/2015', 
      description: '', 
      color: 'juan@example.com', 
      price: '10', 
    },
    { 
      name: 'Blusa', 
      date: '21/02/2015', 
      description: '', 
      color: 'juan@example.com', 
      price: '10', 
    }
    
  ];

  constructor(private router: Router, private authervice: AuthService) {}

 editProducts(products: any) {
    this.authervice.setData(this.products);
    this.router.navigate(['/products/product-form']);
  }
  
}
