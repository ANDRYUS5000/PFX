import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from '../app/auth.guard';
import { CrearusuariosComponent } from './components/crearusuarios/crearusuarios.component';
import { CreardependenciaComponent } from './components/creardependencia/creardependencia.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path:'signin',
    component:SigninComponent
  },
  
  {
    path:'registeruser',
    component:CrearusuariosComponent,
    canActivate:[AuthGuard]//se valida si el usuario tiene iniciada sesión 
  },
  {
    path:'registerdep',
    component:CreardependenciaComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'main',
    component:PrincipalComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'',
    component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
