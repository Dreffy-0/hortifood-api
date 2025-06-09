import { Controller, Post, Body } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post('pagar')
  async pagar(@Body() dados: Partial<Pedido>): Promise<Pedido> {
    return this.pedidoService.criar(dados);
  }
}
