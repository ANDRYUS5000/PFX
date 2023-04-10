import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modprocesador',
  templateUrl: './modprocesador.component.html',
  styleUrls: ['./modprocesador.component.css']
})
export class ModprocesadorComponent {
  
  tipos=['INTEL','INTEL CORE','AMD RYZEN']

  procesador={tipo:'',
        des:'',
        frecuencia:''}

  cadena=''

  auxpro={name:''}

  constructor(public authService:AuthService){ }

  onTipo(e: any) {
    this.procesador.tipo=e.target.value;};
  
  public createProc(){
    this.cadena=this.procesador.tipo+" "+this.procesador.des+" "+this.procesador.frecuencia;

    this.auxpro.name=this.cadena.toUpperCase();

    if(this.procesador.tipo.length>0 && this.procesador.des.length>0 && this.procesador.frecuencia.length>0)
    {
      this.authService.registerProc(this.auxpro)    
      .subscribe(
        res=>{        
         //se registra al usuario y se lanza un mensaje de éxito
         Swal.fire("Registro exitoso","El procesador fue registrado","success")  
         //luego se limpian todos los campos
         this.procesador.tipo=''
  
        },
        //en caso de error se muestra el error por consola
        err=>Swal.fire("Error","El procesador ya existe","error")
        )
    }
    Swal.fire("Error","Introduzca datos válidos","error")
    
  }

}
