import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterBuyComponent } from './register-buy/register-buy.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { ClientCatalogoWiewComponent } from './client-catalogo-wiew/client-catalogo-wiew.component';
import { ClientCatalogoListComponent } from './client-catalogo-list/client-catalogo-list.component';
import { AdministradorCatalogoWiewComponent } from './administrador-catalogo-wiew/administrador-catalogo-wiew.component';
import { AdministradorCatalogoListComponent } from './administrador-catalogo-list/administrador-catalogo-list.component';
import { CourierCatalogoListComponent } from './courier-catalogo-list/courier-catalogo-list.component';
import { CourierCatalogoViewComponent } from './courier-catalogo-view/courier-catalogo-view.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { ShoppingCartPreviewComponent } from './shopping-cart-preview/shopping-cart-preview.component';
import { ServicioModule } from '../services/servicio.module';
import { AdministradorCatalogoDetailComponent } from './administrador-catalogo-detail/administrador-catalogo-detail.component';
import { CourierCatalogoDetailComponent } from './courier-catalogo-detail/courier-catalogo-detail.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { DetalleCompraViewComponent } from './detalle-compra-view/detalle-compra-view.component';
import { PrincipalComponent } from '../principal/principal.component';
import { PagesComponent } from './pages/pages.component';
import { Principal2Component } from './principal2/principal2.component';


@NgModule({
  declarations: [
    ClientCatalogoWiewComponent,
    ClientCatalogoListComponent,
    AdministradorCatalogoWiewComponent,
    AdministradorCatalogoListComponent,
    CourierCatalogoListComponent,
    CourierCatalogoViewComponent,
    ShoppingCartComponent,
    LoginComponent,
    RegisterComponent,
    RegisterBuyComponent,
    OrderStatusComponent,
    ShoppingCartPreviewComponent,
    AdministradorCatalogoDetailComponent,
    CourierCatalogoDetailComponent,
    LoginClientComponent,
    DetalleCompraViewComponent,
    PrincipalComponent,
    PagesComponent,
    Principal2Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ServicioModule,
    PortalModule

  ],
  exports: [
    ShoppingCartPreviewComponent
  ]
})
export class PagesModule { }
