import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuSpinnerComponent } from './meu-spinner/meu-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuSpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
