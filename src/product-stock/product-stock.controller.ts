import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductStockService } from './product-stock.service';
import { CreateProductStockDto } from './dto/create-product-stock.dto/create-product-stock.dto';

@ApiTags('product-stock')
@Controller('product-stock')
export class ProductStockController {
  constructor(private readonly productStockService: ProductStockService) {}

  @Post()
  @ApiOkResponse({ description: 'Products added to stock with succes' })
  @ApiBadRequestResponse({ description: 'Can not add products to stock' })
  create(@Body() createProductStockDto: CreateProductStockDto) {
    return this.productStockService.create(createProductStockDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Result of all products in stock' })
  @ApiBadRequestResponse({ description: 'Products in stock not found' })
  findAll() {
    return this.productStockService.findAll();
  }

  @Get('product:id')
  @ApiOperation({
    summary: 'Find specyfic product in the stock',
    description: 'Returns a list of products in the stock.',
  })
  findProductInStockByProductName(@Param('id', ParseIntPipe) id: number) {
    return this.productStockService.findProductInStockByProductName(id);
  }
}
