import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/interfaces/prueba-response.interface';
import { ServicioService } from 'src/app/services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginUser: ServicioService, private router: Router) {
  }

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }


  sendData() {
    const register: User = this.signInForm.value;
    const obj = register;
    console.log(obj);
    this.loginUser.loginUser(obj).subscribe(
      async data => {
        if (data != null) {
          localStorage.setItem('usuario', JSON.stringify(data));
          localStorage.setItem('data_user', JSON.stringify(data));
          
          this.router.navigate(['/principal2']);
        }
      },
      err => {
        console.log(err);
        console.log("ocurrio un error")
      }
    );
  }
}
