import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { IntermediumService } from 'src/app/services/intermedium.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creardependencia',
  templateUrl: './creardependencia.component.html',
  styleUrls: ['./creardependencia.component.css']
})
export class CreardependenciaComponent {

  dependencia={
    id_unidad:'',
    nombre_unidad:'',   
    tipo_unidad:''
  }
 
  tipos:any=[];
  constructor(public authService:AuthService,
     
    private router:Router,
    public intmService:IntermediumService,
    ) { 

  }

  ngOnInit(): void {
    //solo se ejecuta si el usuario es super Admin
    if(this.intmService.esAdmin())
    {
      this.getTipos()
    }
    //De lo contrario se lanza un mensaje de error y se cierra la sesión
    else{
      Swal.fire("No tiene autorización","","error")
      this.authService.logOut()
      this.router.navigate(['/signin'])
    }
    
   }
 
 
 //método para obtener los roles
   getTipos(){
     this.authService.getTiposDependencia().subscribe(
       res => {
         for(let i of Object.values(res)){
           this.tipos.push(i);
         }
        
       },
       err=>console.log(err)
     )
   };
 //método para obtener el rol seleccionado por el Super Admin
   onTipoDep(e: any) {
     this.dependencia.tipo_unidad=e.target.value;
                 };
  //Método para registrar el usuario
   registrarDependencia(){
   
      
       this.authService.registerDependencia(this.dependencia)    
       .subscribe(
         res=>{        
          //se registra al usuario y se lanza un mensaje de éxito
          Swal.fire("Registro exitoso","La dependencia fue registrada","success")  
          //luego se limpian todos los campos
          this.dependencia.tipo_unidad='';
          this.dependencia.nombre_unidad='';
          this.dependencia.tipo_unidad='';

         },
         //en caso de error se muestra el error por consola
         err=>Swal.fire("Error","La dependencia ya existe","error")
       )
     }
     
     
   }




