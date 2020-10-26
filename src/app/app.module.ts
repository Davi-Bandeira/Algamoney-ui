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


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        TabViewModule,
        TooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
