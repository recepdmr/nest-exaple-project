import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './domain/entities/product';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/products')
  getProducts(): Array<Product> {
    return this.appService.getProducts();
  }
}
