import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectComponent } from './components/subject/subject.component';
import { OperadoresCriacaoComponent } from './components/operadores-criacao/operadores-criacao.component';
import { OfComponent } from './components/of/of.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalComponent } from './components/interval/interval.component';
import { TimerComponent } from './components/time/timer.component';
import { ThrowErrorComponent } from './components/throw-error/throw-error.component';
import { AjaxComponent } from './components/ajax/ajax.component';
import { OperadoresCriacaoJuncaoComponent } from './components/operadores-criacao-juncao/operadores-criacao-juncao.component';
import {HttpClientModule} from "@angular/common/http";
import { ZipComponent } from './components/zip/zip.component';
import { MergeConcatComponent } from './components/merge-concat/merge-concat.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubjectComponent,
    OperadoresCriacaoComponent,
    OfComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    ThrowErrorComponent,
    AjaxComponent,
    OperadoresCriacaoJuncaoComponent,
    ZipComponent,
    MergeConcatComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
