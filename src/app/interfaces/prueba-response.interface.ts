

export interface RegisterUser{
    email: string;
    cellphone: string;
    id: number;
    lastname: string;
    name: string;
    password: string;
    username: string;
    tipoUsuario: number;
}

export interface User{
    password: string;
    username: string;
}

export enum UserRol {
  admin = 1,
  courier= 2,
}

const urlStart: Map<UserRol, string> = new Map([
  [ UserRol.admin, '/login' ],
  [ UserRol.courier, '/login' ],
]);

export class Usuario {
  birthDate: string;
    cellphone: string;
    email: string;
    facebook: string;
    gender: number;
    id: number;
    lastname: string;
    name: string;
    password: string;
    tipoUsuario: UserRol;
    username: string;

  // tslint:disable-next-line:typedef
  get startUrl() {
    return urlStart.get(this.tipoUsuario);
  }
}
