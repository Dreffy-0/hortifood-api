import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('fornecedores')
@Unique(['cnpj', 'email'])
export class Fornecedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nomeFantasia: string;

  @Column({ length: 60 })
  razaoSocial: string;

  @Column({ length: 18 })
  cnpj: string;

  @Column({ length: 60 })
  email: string;

  @Column({ length: 50 })
  senha: string;

  @Column({ length: 15 })
  telefone: string;

  @Column({ length: 255 })
  endereco: string;
}
