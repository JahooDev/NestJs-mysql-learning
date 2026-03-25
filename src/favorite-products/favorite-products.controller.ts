import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FavoriteProductsService } from './favorite-products.service';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('favorites')
@Controller('favorite-products')
export class FavoriteProductsController {
  constructor(private readonly favoriteProductsService: FavoriteProductsService) {}

  @Post(':userId/:productId')
  create(@Param('userId', ParseIntPipe) userId: number, @Param('productId', ParseIntPipe) productId: number) {
    return this.favoriteProductsService.create(userId, productId);
  }

  @Get()
  findAll() {
    return this.favoriteProductsService.findAll();
  }

  @Get('user:id')
  @ApiOperation({
    summary: 'Get favorite products for a user',
    description: 'Returns a list of all products marked as favorite by the specified user.',
  })
  findUserFavouriteProducts(@Param('id') id: string) {
    return this.favoriteProductsService.findUserFavouriteProducts(+id);
  }
  @Get('product:id')
  findUsersWhoFavoritedProduct(@Param('id') id: string) {
    return this.favoriteProductsService.findUsersWhoFavoritedProduct(+id);
  }

  @Delete(':userId/:productId')
  @ApiOkResponse({ description: 'Product removed from favorite' })
  @ApiNotFoundResponse({ description: 'Product not found' })
  @ApiBadRequestResponse({ description: 'Product not found' })
  remove(@Param('userId', ParseIntPipe) userId: number, @Param('productId', ParseIntPipe) productId: number) {
    return this.favoriteProductsService.remove(userId, productId);
  }
}
