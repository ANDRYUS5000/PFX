import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IntermediumService } from 'src/app/services/intermedium.service';

@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css']
})
export class ConceptoComponent {

  showtabla=false;
  showdocumento=false;

  dependencias: any = [];

  

  version={dependencia:'',
  user:'',
  tabla:'',
  documento:''
}
  concepto={name:'',
            vers:this.version}

  constructor(public intmService:IntermediumService, public authService:AuthService){
    this.getDependencias()

  }

  public cargarDocumento(){
    if(!this.showdocumento){
      this.showdocumento=true
    }
    else if(this.showdocumento)
      {
        this.showdocumento=false
      }
  }
  public cargarTabla(){
    if(!this.showtabla)
      {this.showtabla=true}
    else if(this.showtabla)
    {
      this.showtabla=false
    }
  }
  public getDependencias() {
    this.authService.getDependencias().subscribe(
      res => {
        
        for (let i of Object.values(res)) {
          this.dependencias.push(i);
        }
        
      },
      err => console.log(err)
    );
  };

  public onDep(e: any) {
    this.version.dependencia = e.target.value;
}
  public createConcep(){

  }

}
