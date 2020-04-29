import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Two-Way Data-Binding com Angular';

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
