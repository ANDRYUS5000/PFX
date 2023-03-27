import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';
import { IntermediumService } from 'src/app/services/intermedium.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  //variable para declarar el modelo del usuario
  user={email:'',
        password:''}
  
  user2={email:'',
        password:'',
      passwordn:''}
  
   
  //Método para declarar los servicios
  constructor(

    private intmService:IntermediumService,
    private router:Router,
    private authservice:AuthService) { }

  ngOnInit(): void {
  }
  //método para permitir el ingreso a la página
  login(){
    //Se ejecuta el login enviando al usuario
    this.intmService.login(this.user);
    try {
      //una vez pasados 30 minutos se cierra sesión
        setTimeout(()=>{
          this.authservice.logOut()
        },1800000);
        
      } catch (error) {
        console.log(error)
      }
    }

    changePass(){
      
      const userAux={email:this.user2.email,password:this.user2.password}
      if(this.user2.password===this.user2.passwordn)

      {
        try{
          console.log("entré")
          this.authservice.changePassword(userAux).subscribe(
            res=>{
              console.log(res);
              Swal.fire("Success","Contraseña cambiada con éxito","success")
            }
          )
         
        }
        catch(error)
      {
        Swal.fire("Error","No se cambió la contraseña","error")
      }
        
      }
       else Swal.fire("Error","Las contraseñas no coinciden","error")
      }
      

    }
     
    
  

