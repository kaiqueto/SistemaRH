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

  protected excluir(colaborador: Colaborador): void{
    const confirmado = confirm(`Deseja excluir "${colaborador.nome}"?`);
    if (!confirmado) return;

    this.colaboradoreService.excluir(colaborador.id).subscribe({
      next: () =>{
        this.colaboradores.update((Lista) =>
          Lista.filter((c) => c.id !== colaborador.id)
        );
      },
      error: (err) => {
        console.error('Erro ao excluir: ', err);
        this.erro.set(`Não foi possível excluir (status ${err.status}).`)
      },
    });
  }

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
