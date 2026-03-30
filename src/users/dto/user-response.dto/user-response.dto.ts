import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Jan' })
  name: string;

  @ApiProperty({ example: 'jan@test.com' })
  email: string;

  @ApiProperty({ example: 25 })
  age: number;
}
