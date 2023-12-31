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
import { LearnComponent } from './learn/learn.component';
import { VerseComponent } from './read/verse/verse.component';
import { CommentsComponent } from './read/verse/comments/comments.component';
import { RegisterComponent } from './register/register.component';
import { fireBaseConfig } from 'firebaseconfig';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';

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
    LearnComponent,
    VerseComponent,
    CommentsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
