import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent {
  pessoa: any = {
    nome: 'Márcio',
    idade: 46,
    endereco : {
      logradouro: '',
      numero: '',
      cep: '',
      bairro: '',
      cidade: {
        codigo: 0,
        descricao: ''
      }
    }
  }
}
