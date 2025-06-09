import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';
import { EntregadorModule } from './entregador/entregador.module';
import { EntregaModule } from './entrega/entrega.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClienteModule,
    AvaliacaoModule,
    FornecedorModule,
    PedidoModule,
    ProdutoModule,
    EntregadorModule,
    EntregaModule,
  ],
})
export class AppModule {}