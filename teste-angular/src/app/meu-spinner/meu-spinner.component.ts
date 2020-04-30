import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-spinner',
  templateUrl: './meu-spinner.component.html',
  styleUrls: ['./meu-spinner.component.css']
})
export class MeuSpinnerComponent implements OnInit {

  constructor() { }

  max = 100;
  min = 0;

  valor: number = this.min;

  ngOnInit() {
  }

  decrementar() {
    if (this.valor > 0) {
      this.valor--;
    }
  }

  incrementar() {
    if (this.valor < 100) {
      this.valor++;
    }
  }
}
