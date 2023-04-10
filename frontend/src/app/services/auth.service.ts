import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

import {of} from 'rxjs'
import { tap, startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 //se especifica la dirección para que haya conexión con el backend
  private URL='http://localhost:3000/api'
//se crean instancias de Http y router
  constructor(private http:HttpClient,
    private router:Router,  
  ) {}

  

  //conexión para realizar el ingreso al sistema, se debe especificar la url y enviar el usuario
  login(user:any){
   return this.http.post<any>(this.URL+'/auth/signin',user);
  }
  changePassword(user:any){
    return this.http.post<any>(this.URL+'/auth/npass',user);
  }
  //conexión para verificar si el usuario ha ingresado al sistema, para eso se obtiene el token
  loggedIn():Boolean{
    return !!localStorage.getItem('token')
  }
  //Método para extraer el token del localstorage
  getToken(){
    return localStorage.getItem('token')
  }
  //se especifica la ruta para que el Super Admin registre el usuario y se envía el user
  registerUser(user:any){
    return this.http.post<any>(this.URL+'/auth/registeruser',user);
  }

  //método para cerrar sesión, se eliminan las variables del localStorage y se redirige al inicio
  logOut(){
    localStorage.clear()
    this.router.navigate(['/']);
  }
  
  registerPersonaCargo(persona:any){
    return this.http.post<any>(this.URL+'/auth/registerperson',persona)
  }
  registerDependencia(dependencia:any){
    return this.http.post<any>(this.URL+'/auth/creardependencia',dependencia)
  }
  //ruta para obtener las dependencias 
  getDependencias(){
    return this.http.get(this.URL +'/auth/dependencias');
  }
  //ruta para obtener los roles
  getRoles(){
    return this.http.get(this.URL +'/auth/roles');
  }
  getTiposDependencia(){
    return this.http.get(this.URL +'/auth/tipodependencias');
  }

  registerFab(fab:any)
  {
    return this.http.post(this.URL +'/auth/registerfab',fab);
  }
  registerDisk(disk:any){
    return this.http.post(this.URL +'/auth/registerdisk',disk);
  }
  registerProc(proc:any){
    return this.http.post(this.URL +'/auth/registerproc',proc);
  }
  registerRefimp(refimp:any){
    return this.http.post(this.URL +'/auth/registerefimp',refimp);
  }
  registerRef(ref:any){
    return this.http.post<any>(this.URL +'/auth/registeref',ref);
  }
  getFabs(){
    return this.http.get<any>(this.URL +'/auth/getfabs');
  }
  getDisks(){
    return this.http.get<any>(this.URL +'/auth/getdisks');
  }
  getProcesadores(){
    return this.http.get<any>(this.URL +'/auth/getprocs');
  }
  getRefimp(){
    return this.http.get<any>(this.URL +'/auth/getrefsimp');
  }
  getRefpc(){
    return this.http.get<any>(this.URL +'/auth/getrefpc');
  }
  getPeopleCargo(){
    return this.http.get<any>(this.URL+'/auth/peoplecargo');
  }

  createEquipo(equipo:any){
    return this.http.post<any>(this.URL+'/auth/crearequipo',equipo);
  }
}
