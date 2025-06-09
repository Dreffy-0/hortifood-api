import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async cadastrar(dados: Partial<Produto>): Promise<Produto> {
    const existe = await this.produtoRepository.findOne({ where: { nome: dados.nome, fornecedorId: dados.fornecedorId } });
    if (existe) {
      throw new BadRequestException('Produto já cadastrado para este fornecedor.');
    }
    const produto = this.produtoRepository.create(dados);
    return this.produtoRepository.save(produto);
  }

  async listar(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async atualizarEstoque(id: number, novoEstoque: number): Promise<Produto> {
    if (novoEstoque < 0) {
      throw new BadRequestException('Estoque não pode ser negativo.');
    }
    const produto = await this.produtoRepository.findOneBy({ id });
    if (!produto) throw new BadRequestException('Produto não encontrado.');

    produto.estoque = novoEstoque;
    return this.produtoRepository.save(produto);
  }
}