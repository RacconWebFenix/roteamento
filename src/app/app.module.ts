import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';

@NgModule({
  declarations: [AppComponent, PaginaComParametrosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
