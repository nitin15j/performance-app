import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './shared/user-list/user-list.component';
import { PersonalDetailComponent } from './shared/personal-detail/personal-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './shared/material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DetailsComponent } from './shared/details/details.component';
import { SearchComponent } from './shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserListComponent,
    PersonalDetailComponent,
    DetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
