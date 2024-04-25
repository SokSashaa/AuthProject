import {IsDate, IsEmail, IsEnum, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {gender} from "../enums";

export class CreateUserDto {
  @ApiProperty({
    default: 'test@mail.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    default: 'G123dfew!e',
  })
  @IsString()
  password: string;

  @ApiProperty({
    default: 'Ivan',
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    default: 'Ivanov',
  })
  @IsString()
  second_name: string;

  @ApiProperty({
    default:'test_login'
  })
  @IsString()
  login:string;

  @ApiProperty({
    default:'man'
  })
  @IsString()
  gender:'man'|'woman'

  @ApiProperty({
    default:new Date()
  })
  @IsDate()
  date_reg:Date
}
