import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../core/services/movie.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[]; //reveive data from parent component
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTopGrossingMovies().subscribe(
      m=>{this.movies=m;
      //console.table(this.movies);
      }
    )
  }
  buyMovie(movie:Movie){
    console.log(movie);
    //In the child component, create output decortor to emit an event using eventEmitter
    //For example, in child component, we want to send data to parent component when we click on a button,
    //your child click method should emit data using emit method 
    
    //In the parent component, since output is an event, we use normal brackets to subscribe the event,
    //and the data will be inside the $event
  }
    
}
