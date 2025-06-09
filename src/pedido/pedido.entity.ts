import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cliente: string;

  @Column()
  formaPagamento: string;

  @Column()
  pedidoId: number;

  @Column()
  status: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valorTotal: number;
}