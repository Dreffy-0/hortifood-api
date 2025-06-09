import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('entregas')
export class Entrega {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pedidoId: number;

  @Column({ length: 25 })
  statusEntrega: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 150 })
  endereco: string;
}