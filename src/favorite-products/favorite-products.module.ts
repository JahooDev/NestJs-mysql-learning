import { Module } from '@nestjs/common';
import { FavoriteProductsService } from './favorite-products.service';
import { FavoriteProductsController } from './favorite-products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteProductEntity } from './entities/favorite-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteProductEntity])],
  controllers: [FavoriteProductsController],
  providers: [FavoriteProductsService],
})
export class FavoriteProductsModule {}
