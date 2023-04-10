import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modrefpc',
  templateUrl: './modrefpc.component.html',
  styleUrls: ['./modrefpc.component.css']
})
export class ModrefpcComponent {


  ref={name:''}


  constructor(public authService:AuthService){ }

  
  
  public createRef(){
   

    this.authService.registerRef(this.ref)    
    .subscribe(
      res=>{        
       //se registra al usuario y se lanza un mensaje de éxito
       Swal.fire("Registro exitoso","La referencia fue registrada","success")  
       //luego se limpian todos los campos
       this.ref.name=''

      },
      //en caso de error se muestra el error por consola
      err=>Swal.fire("Error","La referencia ya existe","error")
      )
  }
}
