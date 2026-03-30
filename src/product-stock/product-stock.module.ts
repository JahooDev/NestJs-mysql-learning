import { Module } from '@nestjs/common';
import { ProductStockController } from './product-stock.controller';
import { ProductStockService } from './product-stock.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductStockEntity } from './entities/product-stock.entity/product-stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductStockEntity])],
  controllers: [ProductStockController],
  providers: [ProductStockService],
})
export class ProductStockModule {}
