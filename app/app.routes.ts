import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplexInputsComponent } from './complex-inputs/complex-inputs.component';
import { VerticalAlignmentComponent } from './vertical-alignment/vertical-alignment.component';

export const routes: Routes = [
  {
    'path': 'vertical-alignment',
    'component': VerticalAlignmentComponent
  },
  {
    'path': 'complex-inputs',
    'component': ComplexInputsComponent
  }  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);