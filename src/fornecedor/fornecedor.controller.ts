import { Controller, Post, Body } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';

@Controller('fornecedores')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Post()
  async cadastrar(@Body() dados: any) {
    return this.fornecedorService.cadastrar(dados);
  }
}