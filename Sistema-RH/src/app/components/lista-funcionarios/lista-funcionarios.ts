import { Component, inject, signal } from '@angular/core';
import { Colaborador } from '../../models/colaborador';
import { ColaboradoresService } from '../../services/colaborador';

@Component({
  selector: 'app-lista-funcionarios',
  imports: [],
  templateUrl: './lista-funcionarios.html',
  styleUrl: './lista-funcionarios.css',
})
export class ListaFuncionarios {
  private readonly colaboradoreService = inject(ColaboradoresService);
  
  protected readonly colaboradores = signal<Colaborador[]>([]);
  protected readonly carregando = signal(true);
  protected readonly erro = signal('');

  ngOnInit(): void{
    this.colaboradoreService.listar().subscribe({
      next: (lista) => {
        this.colaboradores.set(lista);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set('Não foi possível carregar os colaboraderes.');
        this.carregando.set(false);
      },
    });
  }
}
