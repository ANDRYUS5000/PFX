import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirmaService {
  private URL='http://localhost:3000/api/firma'

  constructor(private http:HttpClient) { }

  async SaveFirma(body:any){
    return this.http.post<any>(this.URL+'/save',body)
  }

  async saveFile(body:FormData){
    return this.http.post<any>(this.URL+'/upload',body)
  }
}
