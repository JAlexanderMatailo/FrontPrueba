import { Component } from '@angular/core';
import { Cargos, Departamentos, Users } from '../Interfaces/Usuarios';
import { UsuariosService } from '../Services/usuarios.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass']
})
export class UsuarioComponent {
  public Departamentos : any[]=[];
  public Cargos : any[]=[];
  public users : any[] = [];

  constructor(
    private usuarioService: UsuariosService,
    private router: Router,
    private matDialog: MatDialog
  ) {

  }

  departament : Departamentos = {
    IdDepartamento : 0,
    codigoDepartamento : "",
    nombreDepartamento : "",
    activo : true,
    idUsuarioCreacion : 0
  }

  cargo : Cargos ={
    IdCargos : 0,
    codigoCargo : "",
    nombreCargo : "",
    activo : true,
    idUsuarioCreacion : 0
  }
  usuarios : Users= {
      IdUsers : 0,
      usuario : "",
      primerNombre : "",
      segundoNombre : "",
      primerApellido : "",
      segundoApellido : "",
      email : "",
      estado : true,
      IdDepartamentos : 0,
      IdCargos :0  
  }
  ingresarUsuario(){
    if(this.departament.IdDepartamento != null && this.cargo.IdCargos != null){
      this.usuarioService.postUsuarios(this.usuarios).subscribe(resp => {
      console.log(resp)})
    }
  }
  Cancelar() {
    close();
  }
}
