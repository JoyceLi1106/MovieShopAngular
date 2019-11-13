import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService { //genrecomponent will inject to genreservice

  constructor(private apiService: ApiService) { }

  GetAllGenres():Observable<Genre[]>{
    return this.apiService.getAll('/genre');
  }
  
}
