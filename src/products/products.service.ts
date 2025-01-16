import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  insertproduct(title: string, desc: string, price: number) {
    const prodId = Math.floor(Math.random() * 100).toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getallProducts() {
    return [...this.products];
  }

  getProduct(productId: string) {
    const [prod, idx] = this.findProduct(productId);

    return { ...prod };
  }

  updateProduct(productId: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(productId);

    const updateProd = { ...product };
    if (title) {
      updateProd.title = title;
    }

    if (desc) {
      updateProd.desc = desc;
    }

    if (price) {
      updateProd.price = price;
    }

    this.products[index] = updateProd;
  }

  private findProduct(prodId: string): [Product, number] {
    const prodIndex = this.products.findIndex((prod) => prod.id === prodId);
    const prod = this.products[prodIndex];
    if (!prod) {
      throw new NotFoundException('Couldnt find product');
    }

    return [prod, prodIndex];
  }

  deleteProduct(productId: string){
    const [product, index] = this.findProduct(productId);

    this.products.splice(index,1);
  }
}
