import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AuthInterceptor } from './auth/auth.interceptor';
import { IsAnonymous } from './auth/guards/IsAnonymous';
import { IsLoggedIn } from './auth/guards/IsLoggedIn';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AdminPanelComponent } from './pages/index/components/admin-panel/admin-panel.component';
import { StudentPanelComponent } from './pages/index/components/student-panel/student-panel.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminKonkursiComponent } from './pages/admin-konkursi/admin-konkursi.component';
import { AdminStudentiComponent } from './pages/admin-studenti/admin-studenti.component';
import { NoviKonkursComponent } from './pages/novi-konkurs/novi-konkurs.component';
import { IsAdmin } from './auth/guards/IsAdmin';
import { IsStudent } from './auth/guards/IsStudent';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminPanelComponent,
    StudentPanelComponent,
    LoginComponent,
    AdminKonkursiComponent,
    AdminStudentiComponent,
    NoviKonkursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent, canActivate: [IsLoggedIn] },
      { path: 'login', component: LoginComponent, canActivate: [IsAnonymous] },
      { path: 'redirect', component: RedirectComponent, canActivate: [IsAnonymous] },
      { path: 'admin/konkursi', component: AdminKonkursiComponent, canActivate: [IsAdmin] },
      { path: 'admin/studenti', component: AdminStudentiComponent, canActivate: [IsAdmin] },
    ], {scrollPositionRestoration: 'enabled'}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    IsAnonymous,
    IsLoggedIn,
    IsAdmin,
    IsStudent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
