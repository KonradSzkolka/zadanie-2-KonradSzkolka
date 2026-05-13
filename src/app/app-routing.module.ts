import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { DataListComponent } from './data-list/data-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/data-list', pathMatch: 'full' },
  { path: 'data-list', component: DataListComponent },
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
