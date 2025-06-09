import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  async criar(dados: Partial<Pedido>): Promise<Pedido> {
    const pedido = this.pedidoRepository.create({
      ...dados,
      status: 'Pago',
    });
    return this.pedidoRepository.save(pedido);
  }
}