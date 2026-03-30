import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNumber } from 'class-validator';

export class CreateProductStockDto {
  @ApiProperty()
  @IsInt()
  productId: number;

  @ApiProperty({ example: 20 })
  @IsInt()
  quantity: number;

  @ApiProperty({ example: '2026-03-27T09:44:24.625Z' })
  @Type(() => Date)
  @IsDate()
  expirationDate: Date;

  @ApiProperty({ example: '8.59' })
  @Type(() => Number)
  @IsNumber()
  purchasePrice: number;
}
