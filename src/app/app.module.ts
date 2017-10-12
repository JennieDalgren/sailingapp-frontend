import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from "ng2-file-upload";

import { AuthService } from './services/auth.service';
import { TripService } from './services/trip.service';
import { UserService } from './services/user.service';

import { RequireAuthService } from './guards/require-auth.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { UserComponent } from './components/user/user.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { SingleTripComponent } from './components/single-trip/single-trip.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { SearchComponent } from './components/search/search.component';
import { RequestBookingComponent } from './components/request-booking/request-booking.component';
import { HeaderComponent } from './components/header/header.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';

//PAGES
import { SingleTripPageComponent } from './pages/single-trip-page/single-trip-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateTripPageComponent } from './pages/create-trip-page/create-trip-page.component';
import { RequestBookingPageComponent } from './pages/request-booking-page/request-booking-page.component';
import { MyHostedPageComponent } from './pages/my-hosted-page/my-hosted-page.component';
import { MyAttendingPageComponent } from './pages/my-attending-page/my-attending-page.component';
import { MyAttendingSinglePageComponent } from './pages/my-attending-single-page/my-attending-single-page.component';
import { MyHostedSinglePageComponent } from './pages/my-hosted-single-page/my-hosted-single-page.component';

//ROUTES
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateTripPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'all/:id', component: SingleTripPageComponent },
  { path: 'attending/:id', component: MyAttendingSinglePageComponent },
  { path: 'host/:id', component: MyHostedSinglePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'request/:id', component: RequestBookingPageComponent },
  { path: 'my-hosted', component: MyHostedPageComponent },
  { path: 'my-attending', component: MyAttendingPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SingleTripPageComponent,
    UserPageComponent,
    UserComponent,
    TripListComponent,
    SingleTripComponent,
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
    CreateTripPageComponent,
    RequestBookingPageComponent,
    HeaderComponent,
    MyHostedPageComponent,
    MyAttendingPageComponent,
    MyAttendingSinglePageComponent,
    MyHostedSinglePageComponent,
    UserNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FileUploadModule
  ],
  exports: [],
  providers: [TripService, AuthService, RequireAuthService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
