import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('clientes')
@Unique(['email', 'cpf'])
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 60 })
  email: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 60 })
  senha: string;
}