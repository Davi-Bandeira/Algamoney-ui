import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TooltipModule} from 'primeng/tooltip';
import {LaunchSearchComponent} from './launch-search/launch-search.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PessoaComponent} from './pessoa/pessoa.component';
import {PipeComponent} from './pipe/pipe.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { FormulariosValidacaoComponent } from './formularios-validacao/formularios-validacao.component';
import { InputTextareaModule} from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    AppComponent,
    LaunchSearchComponent,
    NavbarComponent,
    PessoaComponent,
    PipeComponent,
    LancamentoCadastroComponent,
    FormulariosValidacaoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TabViewModule,
    TooltipModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent, FormulariosValidacaoComponent]
})
export class AppModule {
}
