import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async cadastrar(dados: CreateClienteDto): Promise<Cliente> {
    const existe = await this.clienteRepository.findOne({
      where: [{ email: dados.email }, { cpf: dados.cpf }],
    });
    if (existe) {
      throw new BadRequestException('Email ou CPF já cadastrados.');
    }

    const senhaHash = await bcrypt.hash(dados.senha, 10);
    const cliente = this.clienteRepository.create({ ...dados, senha: senhaHash });
    return this.clienteRepository.save(cliente);
  }

  async listar(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async buscarPorEmail(email: string): Promise<Cliente | null> {
    return this.clienteRepository.findOne({ where: { email } });
  }
}