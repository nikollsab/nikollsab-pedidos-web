import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {
valor: any
  constructor(private router: Router) { }
  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
  
  });

 
  ngOnInit(): void {
  }
  
  
  search(){
    const string = this.signInForm.get('username').value;
    console.log(string);
    this.router.navigate(['/order-status/'+ string]);


  }
}
