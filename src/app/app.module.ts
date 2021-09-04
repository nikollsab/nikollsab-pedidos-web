import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AuthGuard } from './services/auth.guard';

import localeEs from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeEs );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PagesModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'es-PE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
