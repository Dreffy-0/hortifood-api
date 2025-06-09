import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('entregadores')
@Unique(['email', 'cpf'])
export class Entregador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  nome: string;

  @Column({ length: 65 })
  email: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 30 })
  senha: string;

  @Column({ nullable: true })
  cnh: string;

  @Column({ nullable: true })
  documentoVeiculo: string;
}