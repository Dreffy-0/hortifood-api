import { Controller, Post, Get, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from './cliente.entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async cadastrar(@Body() dados: CreateClienteDto): Promise<Cliente> {
    return this.clienteService.cadastrar(dados);
  }

  @Get()
  async listar(): Promise<Cliente[]> {
    return this.clienteService.listar();
  }
} 