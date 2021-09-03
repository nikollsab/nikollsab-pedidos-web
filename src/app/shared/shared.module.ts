import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { UiModule } from './ui/ui.module';




@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
    UiModule
  ]
})
export class SharedModule { }
