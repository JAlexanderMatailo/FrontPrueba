export interface Users{
    IdUsers? : number;
    usuario : string;
    primerNombre : string;
    segundoNombre : string;
    primerApellido : string;
    segundoApellido : string;
    email : string;
    estado : boolean;
    IdDepartamentos : number;
    IdCargos : number;
}

export interface Departamentos{
    IdDepartamento : number;
    codigoDepartamento : string;
    nombreDepartamento : string;
    activo : boolean;
    idUsuarioCreacion : number;
}

export interface Cargos{
    IdCargos : number;
    codigoCargo : string;
    nombreCargo : string;
    activo : boolean;
    idUsuarioCreacion : number;
}