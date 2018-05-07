import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MockCameraComponent } from './mock-camera/mock-camera.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { AuthService } from './core/auth.service';
//import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { NgReduxModule, NgRedux } from 'ng2-redux'
import { IAppState, store } from './core/store';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MockCameraComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    UserModule,
    ToastModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>) {
  //   ngRedux.provideStore(store);
  // }
}
