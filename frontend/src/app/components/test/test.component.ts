import { Component } from '@angular/core';
import { FirmaService } from 'src/app/services/firma.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  firma={
    nombre:'',
    cargo:'',
    file:''
  }
  filetmp:any

  constructor(public firmaservice:FirmaService){}

  async Request(){
    await (await this.firmaservice.SaveFirma(this.firma)).subscribe(async(res)=>{
      const body=new FormData()
      body.append('file',this.filetmp.fileraw, this.filetmp.filename);
      body.append('res',res._id);
      await (await this.firmaservice.saveFile(body)).subscribe()
    })
  }

  selectFile($e: any): void {
    //arreglo para indicar el archivo selecccionado
    const [file] = $e.target.files
    //Si la extensión del archivo se encuentra en el arreglo de extensiones permitidas
    this.filetmp={
      fileraw:file,      
      filename:file.name
    }
  }
}
