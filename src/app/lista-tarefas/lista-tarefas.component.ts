import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {
  tarefas: { tarefa: string, dataLimite: string, descricao: string, concluida: boolean }[] = [];
  tarefasPendentes: { tarefa: string, dataLimite: string, descricao: string, concluida: boolean }[] = [];
  tarefasConcluidas: { tarefa: string, dataLimite: string, descricao: string, concluida: boolean }[] = [];
  tarefasAFazer: { tarefa: string, dataLimite: string, descricao: string, concluida: boolean }[] = [];
  novaTarefa = '';
  novaDataLimite = '';
  novaDescricao = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '' && this.novaDataLimite.trim() !== '' && this.novaDescricao.trim() !== '') {
      this.tarefas.push({
        tarefa: this.novaTarefa,
        dataLimite: this.novaDataLimite,
        descricao: this.novaDescricao,
        concluida: false
      });
      this.atualizarListas();
      this.novaTarefa = '';
      this.novaDataLimite = '';
      this.novaDescricao = '';
    }
  }

  editarTarefa(index: number, lista: { tarefa: string, dataLimite: string, descricao: string, concluida: boolean }[]) {
    const novaDescricao = prompt('Editar tarefa:', lista[index].tarefa);
    if (novaDescricao !== null) {
      lista[index].tarefa = novaDescricao;
    }
  }

  alternarStatusTarefa(index: number, lista: { tarefa: string, dataLimite: string, descricao: string, concluida: boolean }[]) {
    lista[index].concluida = !lista[index].concluida;
    this.atualizarListas();
  }

  excluirTarefa(index: number, lista: { tarefa: string, dataLimite: string, descricao: string, concluida: boolean }[]) {
    // Se a tarefa estiver nas listas de Pendentes ou A Fazer, seja removida (Ajuste)
    if (lista === this.tarefasPendentes || lista === this.tarefasAFazer) {
      const taskIndex = this.tarefas.findIndex(task => task === lista[index]);
      if (taskIndex !== -1) {
        this.tarefas.splice(taskIndex, 1);
      }
    }
  
    lista.splice(index, 1);
    this.atualizarListas();
  }

  atualizarListas() {
    this.tarefasPendentes = this.tarefas.filter(tarefa => !tarefa.concluida);
    this.tarefasConcluidas = this.tarefas.filter(tarefa => tarefa.concluida);
    this.tarefasAFazer = this.tarefas.filter(tarefa => !tarefa.concluida);
  }
}
