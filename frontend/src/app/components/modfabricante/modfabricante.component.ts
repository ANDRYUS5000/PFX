import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modfabricante',
  templateUrl: './modfabricante.component.html',
  styleUrls: ['./modfabricante.component.css']
})
export class ModfabricanteComponent {

  fab={name:''}

  constructor(public authService:AuthService){ }

  public createFab(){
    if(this.fab.name.length>0){
      this.authService.registerFab(this.fab)    
      .subscribe(
        res=>{        
         //se registra al usuario y se lanza un mensaje de éxito
         Swal.fire("Registro exitoso","El fabricante fue registrado","success")  
         //luego se limpian todos los campos
         this.fab.name=''
  
        },
        //en caso de error se muestra el error por consola
        err=>Swal.fire("Error","El fabricante ya existe","error")
        )
    }
    Swal.fire("Error","Introduzca datos válidos","error")
  }


}
