import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { IsEightDigits } from '../../../decorators/digit-count.decorator';
import { IsPositiveOrZero } from '../../../decorators/is-positive-or-zero.decorator';

export class UpdateUserGoogleDto {
  /**
   * Username del usuario.
   * @description Debe ser una cadena alfanumerica no vacía con longitud entre 3 y 50 caracteres.
   * @example 'juanperez14'
   */
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Matches(/^[a-zA-Z0-9]+$/)
  readonly username?: string;

  /**
   * Contraseña del usuario.
   * @description Debe ser una cadena no vacía con longitud entre 8 y 15 caracteres, que incluya al menos una mayúscula, una minúscula, un número y un carácter especial.
   * @example 'Password123!'
   */
  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(15)
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,15}$/)
  readonly password?: string;

  /**
   * Nombre del usuario.
   * @description Debe ser una cadena no vacía con longitud entre 2 y 30 caracteres.
   * @example 'Juan Pérez'
   */
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @Matches(/^[a-zA-Z0-9 ]+$/)
  readonly name?: string;

  /**
   * Apellido del usuario.
   * @description Debe ser una cadena no vacía con longitud entre 2 y 30 caracteres.
   * @example 'Juan Pérez'
   */
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @Matches(/^[a-zA-Z0-9 ]+$/)
  readonly lastName?: string;

  /**
   * Número de documento del usuario.
   * @description Debe ser un número no vacío.
   * @example 12345678
   */

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Validate(IsEightDigits) // custom decorator
  readonly document: number;

  /**
   * Número de teléfono fijo del usuario, es opcional.
   * @description Debe ser un número no vacío.
   * @example 1234567890
   */
  @IsOptional()
  @IsNumber()
  @Validate(IsPositiveOrZero) // custom decorator exclusivo para este campo
  readonly phone?: number;

  /**
   * Número de teléfono personal del usuario.
   * @description Debe ser un número no vacío.
   * @example 1234567890
   */
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly cellphone: number;

  @IsNotEmpty()
  @IsString()
  readonly code: string;
}
