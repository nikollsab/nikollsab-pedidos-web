import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/services/servicio.service';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/interfaces/prueba-response.interface';

interface Cargo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  tiposUsuarios = [
    {
      code: 1,
      nombre: 'Administrador'
    },
    {
      code: 2,
      nombre: 'Transportista'
    }
  ]
  signInForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    cellphone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    tipoUsuario: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private registerUser: ServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  sendData() {

      let register = this.signInForm.value;
      /*     const  */
      // recruiter.hasRuc = (form.value.hasRuc === 'true') ? true : false;
      const obj = register;
      console.log(obj);
      this.registerUser.registerUser(obj).subscribe(
        async data => {
          if (data != null) {
            this.router.navigate(['/login']);
            /*  setTimeout (() => {
               this.authService.startAuthentication();
             }, 2000); */
          }
        },
        err => {
          console.log(err);
          console.log("ocurrio un error")
          /* this.openDialogInfo('Registro fallido  !', 'Ocurrió un error. Intentelo mas tarde', 'error'); */
        }
      );
    }

}
