import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  person={name:'',
        ced:''}

  constructor(public authService:AuthService) { 
      
        }
  registerPerson(){
    if(this.person.name.length>0 && this.person.ced.length>0)
    {
      this.authService.registerPersonaCargo(this.person)    
      .subscribe(
        res=>{        
         //se registra al usuario y se lanza un mensaje de éxito
         Swal.fire("Registro exitoso","La persona fue registrada","success")  
         //luego se limpian todos los campos
         this.person.ced='';
         this.person.name=''
        },
        err=>Swal.fire("Error","La persona ya existe","error"))
       

    }
   
        }
}
