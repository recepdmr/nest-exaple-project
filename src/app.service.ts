import { Injectable } from '@nestjs/common';
import { Product } from './domain/entities/product';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts(): Array<Product> {
    return [
      {
        name: 'TEEst',
      },
      {
        name: 'TEEst2',
      },
      {
        name: 'TEEst4',
      },
      {
        name: 'TEEst5',
      },
    ];
  }
}
