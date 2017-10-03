import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { TripService } from './services/trip.service';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { TripListPageComponent } from './pages/trip-list-page/trip-list-page.component';
import { SingleTripPageComponent } from './pages/single-trip-page/single-trip-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserComponent } from './components/user/user.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { SingleTripComponent } from './components/single-trip/single-trip.component';
import { PlaygroundComponent } from './pages/playground/playground.component';

import { FileSelectDirective } from "ng2-file-upload";
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { HomeComponent } from './pages/home/home.component';

import {MatListModule} from '@angular/material';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trips', component: TripListPageComponent },
  { path: 'trips/:id', component: SingleTripPageComponent },
  { path: 'playground', component: PlaygroundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    TripListPageComponent,
    SingleTripPageComponent,
    UserPageComponent,
    UserComponent,
    TripListComponent,
    SingleTripComponent,
    PlaygroundComponent,
    FileSelectDirective,
    CreateTripComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MatListModule
  ],
  exports: [MatListModule],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
