import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-refimp',
  templateUrl: './refimp.component.html',
  styleUrls: ['./refimp.component.css']
})
export class RefimpComponent {

  marcas=['KYOCERA','HP','EPSON','CANON','LEXMARK','KONICA MINOLTA','IMP 3D']
  
  refimp={marca:'',desc:''}

  cadena=''

  refimpaux={name:''}
  constructor(public authService:AuthService){ }

  onMarca(e: any) {
    this.refimp.marca=e.target.value;};
  
  public createRefimp(){
    this.cadena=this.refimp.marca+" "+this.refimp.desc

    this.refimpaux.name=this.cadena.toUpperCase();

    if(this.refimp.marca.length>0 && this.refimp.desc.length>0)
    {
      this.authService.registerRefimp(this.refimpaux)    
      .subscribe(
        res=>{        
         //se registra al usuario y se lanza un mensaje de éxito
         Swal.fire("Registro exitoso","La referencia de impresora fue registrada","success")  
         //luego se limpian todos los campos
         this.refimp.marca=''
         this.refimp.desc=''
         this.refimpaux.name=''
  
        },
        //en caso de error se muestra el error por consola
        err=>Swal.fire("Error","Esta referencia ya existe","error")
        )
    }
    Swal.fire("Error","Introduzca datos válidos","error")
    
  }

}
