import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { ClienteService } from '../cliente/cliente.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly clienteService: ClienteService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, senha: string): Promise<{ access_token: string }> {
    const cliente = await this.clienteService.buscarPorEmail(email);
    if (!cliente) throw new UnauthorizedException('Credenciais inválidas');

    const senhaValida = await bcrypt.compare(senha, cliente.senha);
    if (!senhaValida) throw new UnauthorizedException('Credenciais inválidas');

    const payload = { sub: cliente.id, email: cliente.email, role: 'cliente' };
    return { access_token: this.jwtService.sign(payload) };
  }
}