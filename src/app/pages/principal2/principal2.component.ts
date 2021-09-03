import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal2',
  templateUrl: './principal2.component.html',
  styleUrls: ['./principal2.component.scss']
})
export class Principal2Component implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
