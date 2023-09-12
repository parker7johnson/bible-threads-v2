import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { ToolbarComponent } from './landing/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GratefulComponent } from './home/grateful/grateful.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './home/favorites/books/books.component';
import { VersesComponent } from './home/favorites/verses/verses.component';
import { VerseOfTheDayComponent } from './home/verse-of-the-day/verse-of-the-day.component';
import { NextReadComponent } from './home/next-read/next-read.component';
import { ReadComponent } from './read/read.component';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    ToolbarComponent,
    HomeComponent,
    GratefulComponent,
    BooksComponent,
    VersesComponent,
    VerseOfTheDayComponent,
    NextReadComponent,
    ReadComponent,
    DiscoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
