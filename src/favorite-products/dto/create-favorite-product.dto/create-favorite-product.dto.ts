import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class CreateFavoriteProductDto {
  @ApiProperty({ example: 15 })
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  productId: number;
}
