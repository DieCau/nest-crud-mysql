import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

// El Dto es la data que se gestiona desde el front hasta el controlador
// Y se mapea / valida con class-validator
export class CreateCatDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  @IsOptional()
  breed?: string;
}
