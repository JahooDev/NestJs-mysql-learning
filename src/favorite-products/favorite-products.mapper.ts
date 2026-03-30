import { FavoriteProductResponseDto } from './dto/favorite-product-response.dto/favorite-product-response.dto';
import { FavoriteProductEntity } from './entities/favorite-product.entity';

export function toFavoriteProductResponseDto(fav: FavoriteProductEntity): FavoriteProductResponseDto {
  return {
    id: fav.id,
    createdAt: fav.createdAt,
    user: {
      id: fav.user.id,
      name: fav.user.name,
      email: fav.user.email,
    },
    product: {
      id: fav.product.id,
      name: fav.product.name,
      producer: fav.product.producer,
      price: fav.product.price,
    },
  };
}

export function toFavoriteProductResponseDtoArray(favs: FavoriteProductEntity[]): FavoriteProductResponseDto[] {
  return favs.map(toFavoriteProductResponseDto);
}
