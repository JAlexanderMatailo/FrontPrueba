import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { Cargos, Departamentos } from '../../Interfaces/Usuarios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  public Departamentos : any[]=[];
  public Cargos : any[]=[];
  public users : any[] = [];

  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'direccion','telefono','estado', 'medido','acciones'];
  dataSource = this.Departamentos;

  departament : Departamentos = {
    IdDepartamento : 0,
    codigoDepartamento : "",
    nombreDepartamento : "",
    activo : true,
    idUsuarioCreacion : 0
  }

  cargos : Cargos ={
    IdCargos : 0,
    codigoCargo : "",
    nombreCargo : "",
    activo : true,
    idUsuarioCreacion : 0
  }

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ){ }


  
  ngOnInit(): void {
    this.obtenerDepartamentos();
    this.obtenerCargo();
  }
  obtenerDepartamentos(){
    this.Departamentos=[]
    this.usuarioService.getDepartamentos().subscribe(resp =>{
      console.log(resp)
      console.log("hola")
      this.Departamentos=resp
    })
  }
  obtenerCargo(){
    this.Cargos=[]
    this.usuarioService.getCargos().subscribe(resp =>{
      console.log(resp)
      this.Cargos=resp
    })
  }
}
