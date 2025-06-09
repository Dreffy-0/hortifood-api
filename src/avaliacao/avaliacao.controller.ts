import { Controller, Post, Body } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';

@Controller('avaliacoes')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  async avaliar(@Body() body: { produtoId: number; nota: number; comentario?: string }) {
    return this.avaliacaoService.avaliar(body.produtoId, body.nota, body.comentario);
  }
}