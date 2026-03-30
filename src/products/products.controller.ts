import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductResponseDto } from './dto/product-response.dto/product-response.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  @ApiOkResponse({ type: ProductResponseDto, isArray: true, description: 'All products list' })
  @ApiBadRequestResponse({ description: 'Products bad request' })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiBadRequestResponse({ description: 'Product bad request' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Product removed from data base' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
