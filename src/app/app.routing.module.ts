import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagninaNaoEncontradaComponent } from './pagnina-nao-encontrada/pagnina-nao-encontrada.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  { path: 'primeira-pagina', component: PrimeiraPaginaComponent },
  { path: 'segunda-pagina', component: SegundaPaginaComponent },
  { path: '', redirectTo: 'primeira-pagina', pathMatch: 'full' },
  { path: '**', component: PagninaNaoEncontradaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
