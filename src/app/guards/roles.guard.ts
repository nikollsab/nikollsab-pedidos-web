import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { PermissionGuardModule } from './permission.module';
import { ServicioService } from '../services/servicio.service';
@Injectable({
  providedIn: PermissionGuardModule
})
export class RolesGuard implements CanActivate {

  constructor(
    private session: ServicioService,
    private router: Router,
  ) {  }



  canActivate(
    next: ActivatedRouteSnapshot): boolean | UrlTree {
    const roles = next.data.roles;
    const rol = this.session.getUsuario.usuarioId;

    if ( roles.includes(rol) ) {
      return true;

    } else {
      // this.router.parseUrl(this.session.getUsuario.startUrl);
      sessionStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
