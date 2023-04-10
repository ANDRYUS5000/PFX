import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modisco',
  templateUrl: './modisco.component.html',
  styleUrls: ['./modisco.component.css']
})
export class ModiscoComponent {
  
  tipos=['HDD','SDD']

  disco={marca:'',
        capacidad:'',
        tipo:''}

  cadena=''

  auxdisco={name:''}

  constructor(public authService:AuthService){ }

  onTipo(e: any) {
    this.disco.tipo=e.target.value;};
  public createDisco(){
    this.cadena=this.disco.marca+" "+this.disco.capacidad+" "+this.disco.tipo;

    this.auxdisco.name=this.cadena.toUpperCase();
    if(this.disco.marca.length>0 && this.disco.capacidad.length>0 && this.disco.tipo.length>0)
    {
      this.authService.registerDisk(this.auxdisco)    
      .subscribe(
        res=>{        
         //se registra al usuario y se lanza un mensaje de éxito
         Swal.fire("Registro exitoso","El disco fue registrado","success")  
         //luego se limpian todos los campos
         this.disco.marca=''
         this.disco.capacidad=''
         this.disco.tipo=''
         this.cadena=''
         this.auxdisco.name=''
  
        },
        //en caso de error se muestra el error por consola
        err=>Swal.fire("Error","El disco ya existe","error")
        )
    }
    Swal.fire("Error",'Introduzca datos válidos',"error")
    
  }

}
