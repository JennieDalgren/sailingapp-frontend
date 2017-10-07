import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AuthService } from './services/auth.service';
import { TripService } from './services/trip.service';
import { UserService } from './services/user.service';

import { RequireAuthService } from './guards/require-auth.service';


import { AppComponent } from './app.component';
import { SingleTripPageComponent } from './pages/single-trip-page/single-trip-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserComponent } from './components/user/user.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { SingleTripComponent } from './components/single-trip/single-trip.component';
import { PlaygroundComponent } from './pages/playground/playground.component';

import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';

import { FileSelectDirective } from "ng2-file-upload";

import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RequestBookingComponent } from './components/request-booking/request-booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'trips/:id', component: SingleTripPageComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SingleTripPageComponent,
    UserPageComponent,
    UserComponent,
    TripListComponent,
    SingleTripComponent,
    PlaygroundComponent,
    FileSelectDirective,
    CreateTripComponent,
    HomeComponent,
    SearchComponent,
    AuthLoginComponent,
    AuthLogoutComponent,
    AuthSignupComponent,
    AuthUserComponent,
    SignupPageComponent,
    LoginPageComponent,
    RequestBookingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [TripService, AuthService, RequireAuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }



//
//
//
// import { NgModule } from '@angular/core';
//
// import {
//   MatButtonModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatCardModule
// } from '@angular/material';
//
// @NgModule({
//   imports: [
//     MatButtonModule,
//     MatMenuModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatCardModule
//   ],
//   exports: [
//     MatButtonModule,
//     MatMenuModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatCardModule
//   ]
// })
// export class MaterialModule {}
//
