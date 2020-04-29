import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from './meu-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MeuFormComponent
  ],
  exports: [
    MeuFormComponent
  ]
})
export class MeuFormModule { }
