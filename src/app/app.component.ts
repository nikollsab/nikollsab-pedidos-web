import { Component } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pedidos-web';

  // constructor(
  //   private session: ServicioService,
  //   private router: Router) { }

  // closeSession() {
  //   this.session.destroy();
  //   this.router.navigateByUrl('/');
  // }


}
