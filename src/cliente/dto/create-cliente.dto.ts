import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @Length(1, 100)
  nome: string;

  @IsEmail()
  @Length(1, 60)
  email: string;

  @IsNotEmpty()
  @Length(11, 14)
  cpf: string;

  @IsNotEmpty()
  @Length(6, 60)
  senha: string;
}
