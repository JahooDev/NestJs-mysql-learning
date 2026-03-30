import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsString, Min, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Jan' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: 'myemail@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '20' })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  age: number;
}
