import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComplexInputsComponent } from './complex-inputs/complex-inputs.component';
import { VerticalAlignmentComponent } from './vertical-alignment/vertical-alignment.component';
import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    routing
   ],
  declarations: [
    AppComponent,
    ComplexInputsComponent,
    VerticalAlignmentComponent,
   ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }