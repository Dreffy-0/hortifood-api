import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fornecedor } from './fornecedor.entity';

@Injectable()
export class FornecedorService {
  constructor(
    @InjectRepository(Fornecedor)
    private readonly fornecedorRepository: Repository<Fornecedor>,
  ) {}

  async cadastrar(dados: Partial<Fornecedor>): Promise<Fornecedor> {
    const existente = await this.fornecedorRepository.findOne({
      where: [{ cnpj: dados.cnpj }, { email: dados.email }],
    });
    if (existente) {
      throw new BadRequestException('CNPJ ou Email já cadastrados.');
    }
    const fornecedor = this.fornecedorRepository.create(dados);
    return this.fornecedorRepository.save(fornecedor);
  }
}
