import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver: boolean = false;

  botaoClicado() {
    alert("Botão clicado!");
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
