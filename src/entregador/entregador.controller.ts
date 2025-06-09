import { Controller, Post, Body } from '@nestjs/common';
import { EntregadorService } from './entregador.service';

@Controller('entregadores')
export class EntregadorController {
  constructor(private readonly entregadorService: EntregadorService) {}

  @Post()
  async cadastrar(@Body() dados: any) {
    return this.entregadorService.cadastrar(dados);
  }
}