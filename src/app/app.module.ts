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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminPanelComponent,
    StudentPanelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent, canActivate: [IsLoggedIn] },
      { path: 'login', component: LoginComponent, canActivate: [IsAnonymous] },
      { path: 'redirect', component: RedirectComponent, canActivate: [IsAnonymous] },
    ], {scrollPositionRestoration: 'enabled'}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    IsAnonymous,
    IsLoggedIn
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
