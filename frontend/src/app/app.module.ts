import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { CrearusuariosComponent } from './components/crearusuarios/crearusuarios.component';
import { CreardependenciaComponent } from './components/creardependencia/creardependencia.component';

import { PrincipalComponent } from './components/principal/principal.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CrearusuariosComponent,
    CreardependenciaComponent,
    PrincipalComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
