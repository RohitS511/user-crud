import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generateId = this.productService.insertproduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );

    return { id: generateId };
  }

  @Get()
  getall() {
    return this.productService.getallProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string){
    return this.productService.getProduct(prodId);
  }

  @Patch(':id')
  updateProduct(@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('desc') prodDesc: string, @Body('price') prodPrice: number){
    this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return "Updated succesfully";
  }

  @Delete(':id')
  deleteProduct(@Param('id') prodId: string){
    this.productService.deleteProduct(prodId);
    return "Deleted Successfully";
  }
}
