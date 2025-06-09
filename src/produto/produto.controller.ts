import { Controller, Post, Get, Body, Patch, Param } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async cadastrar(@Body() dados: Partial<Produto>): Promise<Produto> {
    return this.produtoService.cadastrar(dados);
  }

  @Get()
  async listar(): Promise<Produto[]> {
    return this.produtoService.listar();
  }

  @Patch(':id/estoque')
  async atualizarEstoque(@Param('id') id: string, @Body() body: { estoque: number }) {
    return this.produtoService.atualizarEstoque(+id, body.estoque);
  }
}
