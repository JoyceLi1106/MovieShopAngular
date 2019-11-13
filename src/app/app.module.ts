import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { HeaderComponent } from './core/layout/header/header.component'; //using in C#


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';

@NgModule({ //attributes in C#
  declarations: [ 
    AppComponent, GenresComponent, HeaderComponent, MovieListComponent, HomeComponent, MovieCardComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [], //DI bindings 
  bootstrap: [AppComponent] 
})
export class AppModule { } 
