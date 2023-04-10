import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { IntermediumService } from 'src/app/services/intermedium.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  person={name:'',
        ced:''}

  jefe={name:'',
        cargo:'',
        firma:File}

  //variable para almacenar archivo temporal
  filetmp:any
  //variable para verificar si se adjuntó o no un archivo
  FileSelected:boolean=false
  //variable para validar si la extensión del archivo es válida o no
  FileAllowed:boolean=false

  buttonDis = false;

  cargos=[{id:"1",name:'JEFE SOPORTE IIT'},
          {id:"2",name:'JEFE INFRAESTRUCTURA IT'}]

  dependencia={id_unidad:'',
          nombre_unidad:'',
          tipo_unidad:''}

  tiposdep:any=[];

  constructor(public authService:AuthService,
              public intmService:IntermediumService) { 
                this.getTiposDep()
      
        }


  getTiposDep() {
          this.authService.getTiposDependencia().subscribe(
            res => {
              
              for (let i of Object.values(res)) {
                this.tiposdep.push(i);
              }
              
            },
            err => console.log(err)
          );
        };

  onTipo(e: any) {
          this.dependencia.tipo_unidad=e.target.value;};
  onCargo(e: any) {
          this.jefe.cargo=e.target.value;};


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
        err=>Swal.fire("Error","La persona ya existe","error"))    }
   
        }

  createDep(){
    if(this.dependencia.id_unidad.length>0 && this.dependencia.nombre_unidad.length>0)
    {
      this.authService.registerDependencia(this.dependencia)    
      .subscribe(
        res=>{        
         //se registra al usuario y se lanza un mensaje de éxito
         Swal.fire("Registro exitoso","La dependencia fue registrada","success")  
         //luego se limpian todos los campos
         this.dependencia.id_unidad='';
         this.dependencia.nombre_unidad=''
         this.dependencia.tipo_unidad=''
        },
        err=>Swal.fire("Error","La dependencia ya existe","error"))    }
   
        }

  
  chargeFirm($e: any): void {
          //se modifica la variable porque se ha cargado un documento
          this.FileSelected=true
          //arreglo para indicar el archivo selecccionado
          const [file] = $e.target.files
          //arreglo con las extensiones de archivo válidas para evitar la carga de un virus
          let extensiones = ["jpg", "png", "jpeg","docx","odt","xlsx","xls","ods"];
          //se obtiene la extensión del archivo seleccionado 
          var extension=file.name.split(".").slice(-1)
          //Si la extensión del archivo se encuentra en el arreglo de extensiones permitidas
          if(extensiones.indexOf(extension[0])!==-1)
          {
           //se carga el documento en la base de datos
            this.filetmp={
              fileraw:file,      
              filename:file.name
            }
            //se modifica el valor porque el archivo si es permitido
            this.FileAllowed=true
            //Se lanza un mensaje de éxito para el usuario
            Swal.fire("Registro exitoso","Su archivo ha sido adjuntado","success")
            this.buttonDis=true
          }
          //Si el archivo no es válido se lanza un mensaje de error para que 
          //Se cambie el archivo subido
          else{
            Swal.fire("Error","Tipo de archivo no permitido","error")
            this.buttonDis=false
          }    
        }

        async Request(){
        }
}
