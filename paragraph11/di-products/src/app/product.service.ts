import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProduct(): Product {
    return { id: 0, 
            title: "Samsung s20",
            price: 1049.99,
            description: "The latest iPhone" };
  }
}
