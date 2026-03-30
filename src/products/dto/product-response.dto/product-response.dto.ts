import { ApiProperty } from '@nestjs/swagger';
import { ProductTypeEnum } from 'src/products/_utils/product-type.enum';

export class ProductResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Product name' })
  name: string;

  @ApiProperty({ example: 'Producer Name' })
  producer: string;

  @ApiProperty({ example: ProductTypeEnum.BIO })
  category: ProductTypeEnum;

  @ApiProperty({ example: 'Product description' })
  description: string;

  @ApiProperty({ example: 5 })
  quantity: number;

  @ApiProperty({ example: Date() })
  added: Date;

  @ApiProperty({ example: 4.5 })
  price: number;
}
