import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrega } from './entrega.entity';

@Injectable()
export class EntregaService {
  constructor(
    @InjectRepository(Entrega)
    private readonly entregaRepository: Repository<Entrega>,
  ) {}

  async confirmarEntrega(pedidoId: number, codigo: string): Promise<Entrega> {
    if (codigo !== '123456') {
      throw new BadRequestException('Código incorreto');
    }
    const entrega = await this.entregaRepository.findOne({ where: { pedidoId } });
    if (!entrega) throw new BadRequestException('Entrega não encontrada');

    entrega.statusEntrega = 'Entregue';
    return this.entregaRepository.save(entrega);
  }
}