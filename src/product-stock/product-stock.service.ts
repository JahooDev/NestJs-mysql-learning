import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductStockEntity } from './entities/product-stock.entity/product-stock.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductStockDto } from './dto/create-product-stock.dto/create-product-stock.dto';

@Injectable()
export class ProductStockService {
  constructor(
    @InjectRepository(ProductStockEntity)
    private readonly productStockRepository: Repository<ProductStockEntity>,
  ) {}

  findAll() {
    return this.productStockRepository.find();
  }

  create(createProductStockDto: CreateProductStockDto) {
    const newProductInStock = this.productStockRepository.create(createProductStockDto);
    return this.productStockRepository.save(newProductInStock);
  }

  async findProductInStockByProductName(productId: number) {
    const product = await this.productStockRepository.find({ where: { productId } });
    if (!product) {
      throw new NotFoundException('Product not found in the stock');
    }

    return product;
  }
}
