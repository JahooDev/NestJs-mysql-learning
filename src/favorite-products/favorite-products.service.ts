import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteProductEntity } from './entities/favorite-product.entity';
import { Repository } from 'typeorm';
import { FavoriteProductResponseDto } from './dto/favorite-product-response.dto/favorite-product-response.dto';
import { toFavoriteProductResponseDtoArray } from './favorite-products.mapper';

@Injectable()
export class FavoriteProductsService {
  constructor(
    @InjectRepository(FavoriteProductEntity)
    private readonly favoriteProductsRepository: Repository<FavoriteProductEntity>,
  ) {}

  async create(userId: number, productId: number) {
    const existingFavorite = await this.favoriteProductsRepository.findOne({
      where: { userId, productId },
    });

    if (existingFavorite) {
      throw new BadRequestException('Product already in favorites');
    }

    const favorite = this.favoriteProductsRepository.create({
      userId,
      productId,
    });

    return this.favoriteProductsRepository.save(favorite);
  }

  async findAll(): Promise<FavoriteProductResponseDto[]> {
    const favorites = await this.favoriteProductsRepository.find({
      relations: ['user', 'product'],
    });

    return toFavoriteProductResponseDtoArray(favorites);
  }

  async findUserFavouriteProducts(userId: number) {
    const favoriteProducts = await this.favoriteProductsRepository.find({ where: { userId } });
    if (favoriteProducts.length === 0) {
      throw new NotFoundException('Favorit product not found');
    }
    return favoriteProducts;
  }

  async findUsersWhoFavoritedProduct(productId: number) {
    const usersFavorite = await this.favoriteProductsRepository.find({ where: { productId } });
    if (usersFavorite.length === 0) {
      throw new NotFoundException('Users not found for this product');
    }
    return usersFavorite;
  }

  async remove(userId: number, productId: number) {
    const findResult = await this.favoriteProductsRepository.findOne({ where: { userId, productId } });

    if (!findResult) {
      throw new NotFoundException('Item not found');
    }

    const result = await this.favoriteProductsRepository.delete({ userId, productId });

    if (result.affected === 0) {
      throw new NotFoundException('Item could not be deleted');
    }

    return { message: 'Item removed from favorites' };
  }
}
