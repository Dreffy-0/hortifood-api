import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avaliacao } from './avaliacao.entity';

@Injectable()
export class AvaliacaoService {
  constructor(
    @InjectRepository(Avaliacao)
    private readonly avaliacaoRepository: Repository<Avaliacao>,
  ) {}

  async avaliar(produtoId: number, nota: number, comentario?: string): Promise<Avaliacao> {
    if (!nota || nota < 1 || nota > 5) {
      throw new BadRequestException('Nota deve estar entre 1 e 5');
    }
    const avaliacao = this.avaliacaoRepository.create({ produtoId, nota, comentario });
    return this.avaliacaoRepository.save(avaliacao);
  }
}