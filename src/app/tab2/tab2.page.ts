import { Component } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  arrayPosts:any;
  
  constructor(
    public usuariosService:UsuariosService
  ) {}

  ngOnInit() {
    this.getUsuariosJson();
  }

  async getUsuariosJson() { //llamamos a la funcion getPost de nuestro servicio.

    let dataJson;
    let city;
    let newArray = [];
    await this.usuariosService.getUsuarios()
    .then(data => {
      dataJson = data;
      city = dataJson.map(function (data) {
      return data.address.city; 
     });
     
    });

    for (var i = 0; i < dataJson.length; i++) {
      newArray.push(
        {
         "name": dataJson[i].name,
         "email": dataJson[i].email,
         "city": city[i],
         "phone": dataJson[i].phone 
         }
      );
    } 
    
    this.arrayPosts = newArray;
 
  }




}
