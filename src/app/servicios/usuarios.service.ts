import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    public http: HttpClient
  ) { }

  getUsuarios() {

    return new Promise(resolve=>{
      this.http.get(this.url).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
    
  }
}
