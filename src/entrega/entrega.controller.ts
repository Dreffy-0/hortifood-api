import { Controller, Patch, Body } from '@nestjs/common';
import { EntregaService } from './entrega.service';

@Controller('entregas')
export class EntregaController {
  constructor(private readonly entregaService: EntregaService) {}

  @Patch('confirmar')
  async confirmar(@Body() body: { pedidoId: number; codigoConfirmacao: string }) {
    return this.entregaService.confirmarEntrega(body.pedidoId, body.codigoConfirmacao);
  }
}