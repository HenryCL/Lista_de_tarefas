import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {
  tarefas: { descricao: string, concluida: boolean }[] = [];
  tarefasPendentes: { descricao: string, concluida: boolean }[] = [];
  tarefasConcluidas: { descricao: string, concluida: boolean }[] = [];
  tarefasAFazer: { descricao: string, concluida: boolean }[] = [];
  novaTarefa = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push({ descricao: this.novaTarefa, concluida: false });
      this.atualizarListas();
      this.novaTarefa = '';
    }
  }

  editarTarefa(index: number, lista: { descricao: string, concluida: boolean }[]) {
    const novaDescricao = prompt('Editar tarefa:', lista[index].descricao);
    if (novaDescricao !== null) {
      lista[index].descricao = novaDescricao;
    }
  }

  alternarStatusTarefa(index: number, lista: { descricao: string, concluida: boolean }[]) {
    lista[index].concluida = !lista[index].concluida;
    this.atualizarListas();
  }

  excluirTarefa(index: number, lista: { descricao: string, concluida: boolean }[]) {
    lista.splice(index, 1);
    this.atualizarListas();
  }

  atualizarListas() {
    this.tarefasPendentes = this.tarefas.filter(tarefa => !tarefa.concluida);
    this.tarefasConcluidas = this.tarefas.filter(tarefa => tarefa.concluida);
    this.tarefasAFazer = this.tarefas.filter(tarefa => !tarefa.concluida);
  }

  }
