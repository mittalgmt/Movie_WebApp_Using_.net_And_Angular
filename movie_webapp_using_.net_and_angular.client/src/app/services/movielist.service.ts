import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {
  baseApiurl:string="https://localhost:7003";
  
  constructor(private http: HttpClient) { }

  getAllMovie(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.baseApiurl+"/api/Movies");
  }

  addMovie(newMovie: Movie): Observable<Movie>{
      newMovie.id='00000000-0000-0000-0000-000000000000';
      return this.http.post<Movie>(this.baseApiurl + '/api/Movies' , newMovie);

  }

  UpdateMovie(id: string, movie:Movie): Observable<Movie>{
    return this.http.put<Movie>(this.baseApiurl + '/api/Movies/'+ id, movie);

  }

  deleteMovie(id : string):  Observable<Movie> {
    return this.http.delete <Movie>(this.baseApiurl + "/api/Movies/"+ id);
  }

  getAllDeletedMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.baseApiurl +"/api/Movies/get-deleted-movies");

  }

  undoDeletedMovie(id:string , movie:Movie): Observable<Movie[]>{
    return this.http.put<Movie[]>(this.baseApiurl + '/api/Movies/undo-deleted-movie/' + id ,movie);
  }

}
