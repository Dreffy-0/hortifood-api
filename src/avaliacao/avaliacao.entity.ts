import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('avaliacoes')
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  produtoId: number;

  @Column('int')
  nota: number;

  @Column({ type: 'text', nullable: true })
  comentario: string;

  @CreateDateColumn()
  data: Date;
}