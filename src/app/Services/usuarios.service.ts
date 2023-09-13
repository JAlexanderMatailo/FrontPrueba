import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.develpment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  urlBase = environment.urlBase
  contoladorUsers = 'Usuarios/'
   constructor(private http: HttpClient) { }
 
   /*Departamentos*/
   getDepartamentos(){
     let header= new HttpHeaders()
     .set('Type-content','aplication/json')
     return this.http.get<any>(this.urlBase+this.contoladorUsers+'GetAllDepartamentos');
   }

  /*Cargos */
  getCargos(){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get<any>(this.urlBase+this.contoladorUsers+'GetAllCargo');
  }

  /*Usuarios */
  postUsuarios(datosCliente:any){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.post<any>(this.urlBase+this.contoladorUsers+'RegistrarUsuario',datosCliente) 
  }
  
  getUsuarios(){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get<any>(this.urlBase+this.contoladorUsers+'GetAllUsuarios')
  }

}
