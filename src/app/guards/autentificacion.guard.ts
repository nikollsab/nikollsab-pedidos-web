import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioService } from '../services/servicio.service';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionGuard implements CanActivate {
  constructor( private auth: ServicioService, private router: Router) {}

  canActivate(){
    if (this.auth.getToken){
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
