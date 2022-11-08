import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// for polyA
import { biomartGenesComponent } from './components/biomartGenes/biomartGenes.component';
// test for d3
import { test } from './components/testd3/test.component';

const routes: Routes = [{ path: 'biomartGenes', component: biomartGenesComponent }, { path: 'd3test', component: test }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
