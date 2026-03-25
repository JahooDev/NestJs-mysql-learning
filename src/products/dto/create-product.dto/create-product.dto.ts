import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, Min, MinLength } from 'class-validator';
import { ProductTypeEnum } from 'src/products/_utils/product-type.enum';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty()
  producer: string;

  @ApiProperty({ example: ProductTypeEnum.BIO })
  category: ProductTypeEnum;

  @ApiProperty()
  description: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  added: Date;

  @ApiProperty()
  @Type(() => Number)
  @Min(0)
  price: number;
}
