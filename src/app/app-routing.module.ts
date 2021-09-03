import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCatalogoWiewComponent } from './pages/client-catalogo-wiew/client-catalogo-wiew.component';
import { AdministradorCatalogoWiewComponent } from './pages/administrador-catalogo-wiew/administrador-catalogo-wiew.component';
import { CourierCatalogoViewComponent } from './pages/courier-catalogo-view/courier-catalogo-view.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterBuyComponent } from './pages/register-buy/register-buy.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { AdministradorCatalogoDetailComponent } from './pages/administrador-catalogo-detail/administrador-catalogo-detail.component';
import { CourierCatalogoDetailComponent } from './pages/courier-catalogo-detail/courier-catalogo-detail.component';
import { LoginClientComponent } from './pages/login-client/login-client.component';
import { DetalleCompraViewComponent } from './pages/detalle-compra-view/detalle-compra-view.component';
import { PrincipalComponent } from './principal/principal.component';
import { PagesComponent } from './pages/pages/pages.component';
import { AuthGuard } from './services/auth.guard';
import { Principal2Component } from './pages/principal2/principal2.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: PagesComponent,  children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      { path: 'catalogo', component: ClientCatalogoWiewComponent },
      { path: 'courier', component: CourierCatalogoViewComponent },
      { path: 'carrito', component: ShoppingCartComponent },
    
      { path: 'registro', component: RegisterComponent },
      { path: 'registro-compra', component: RegisterBuyComponent },
      { path: 'order-status/:id', component: OrderStatusComponent },
     
      { path: 'detalle-courier/:pedidoId', component: CourierCatalogoDetailComponent },
      { path: 'login-cliente', component: LoginClientComponent },
      { path: 'detalle-compra', component: DetalleCompraViewComponent },
      { path: 'principal', component: PrincipalComponent }
    ]
  },
  { path: 'principal2', component: Principal2Component,  canActivate: [AuthGuard],  children: [
    { path: '', redirectTo: 'administrador', pathMatch: 'full' },
    { path: 'administrador', component: AdministradorCatalogoWiewComponent },
    { path: 'detalle-administrador/:id', component: AdministradorCatalogoDetailComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
