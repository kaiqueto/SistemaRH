import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly auth = inject(AuthService);
  protected readonly title = signal('Sistema-RH');

   protected readonly linksPublicos = [
    { rota: '/login', texto: 'Login' },
    { rota: '/cadastro', texto: 'Cadastro' },
  ];
  protected readonly linksPrivados = [
    { rota: '/lista-funcionarios', texto: 'Funcionários' },
    { rota: '/formulario-funcionario', texto: 'Novo funcionário' },
    { rota: '/enderecos', texto: 'Endereços' },
    { rota: '/contatos', texto: 'Contatos' },
  ];
}
