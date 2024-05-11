import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { IsEightDigits } from '../../../decorators/digit-count.decorator';

export class CreateUserDto {
  /**
   * Username del usuario.
   * @description Debe ser una cadena alfanumerica no vacía con longitud entre 3 y 50 caracteres.
   * @example 'juanperez14'
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Matches(/^[a-zA-Z0-9]+$/)
  readonly username: string;

  /**
   * Contraseña del usuario.
   * @description Debe ser una cadena no vacía con longitud entre 8 y 15 caracteres, que incluya al menos una mayúscula, una minúscula, un número y un carácter especial.
   * @example 'Password123!'
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(15)
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,15}$/)
  readonly password: string;

  /**
   * Nombre del usuario.
   * @description Debe ser una cadena no vacía con longitud entre 2 y 30 caracteres.
   * @example 'Juan Pérez'
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @Matches(/^[a-zA-Z0-9]+$/)
  readonly name: string;

  /**
   * Apellido del usuario.
   * @description Debe ser una cadena no vacía con longitud entre 2 y 30 caracteres.
   * @example 'Juan Pérez'
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @Matches(/^[a-zA-Z0-9]+$/)
  readonly lastName: string;

  /**
   * Número de documento del usuario.
   * @description Debe ser un número no vacío.
   * @example 12345678
   */

  @IsNotEmpty()
  @IsNumber()
  @Validate(IsEightDigits) // custom decorator
  readonly document: number;

  /**
   * Número de teléfono fijo del usuario.
   * @description Debe ser un número no vacío.
   * @example 1234567890
   */
  @IsNotEmpty()
  @IsNumber()
  readonly phone?: number;

  /**
   * Número de teléfono personal del usuario.
   * @description Debe ser un número no vacío.
   * @example 1234567890
   */
  @IsNotEmpty()
  @IsNumber()
  readonly cellphone: number;

  /**
   * Correo electrónico del usuario.
   * @description Debe ser una cadena no vacía con formato de email válido.
   * @example 'usuario@example.com'
   */
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly code: string;
}
