import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entregador } from './entregador.entity';

@Injectable()
export class EntregadorService {
  constructor(
    @InjectRepository(Entregador)
    private readonly entregadorRepository: Repository<Entregador>,
  ) {}

  async cadastrar(dados: Partial<Entregador>): Promise<Entregador> {
    const existente = await this.entregadorRepository.findOne({
      where: [{ email: dados.email }, { cpf: dados.cpf }],
    });
    if (existente) {
      throw new BadRequestException('E-mail ou CPF já cadastrados.');
    }
    const entregador = this.entregadorRepository.create(dados);
    return this.entregadorRepository.save(entregador);
  }
}