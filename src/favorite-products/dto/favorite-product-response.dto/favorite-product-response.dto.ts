import { ApiProperty } from '@nestjs/swagger';
import { ProductLightResponseDto } from 'src/products/dto/product-response.dto/product-light-response.dto';
import { UserLightResponseDto } from 'src/users/dto/user-response.dto/user-light-response.dto';

export class FavoriteProductResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  user: UserLightResponseDto;

  @ApiProperty()
  product: ProductLightResponseDto;
}
