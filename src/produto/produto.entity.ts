import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 50 })
  categoria: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column('int')
  estoque: number;

  @Column()
  fornecedorId: number;
}