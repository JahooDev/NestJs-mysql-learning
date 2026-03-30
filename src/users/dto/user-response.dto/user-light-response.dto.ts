import { ApiProperty } from '@nestjs/swagger';

export class UserLightResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
}
