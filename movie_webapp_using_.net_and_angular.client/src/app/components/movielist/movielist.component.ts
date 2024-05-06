import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovielistService } from '../../services/movielist.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent implements OnInit {
    movies : Movie[]=[];
    newMovie: Movie = {
       id: '',
      movieName:'',
      // movieDescription:'',
      watched: false,
      IsDeleted:false,
    }
    constructor(private movielistservice: MovielistService) { }

    ngOnInit(): void {
       this.getAllMovie(); 
    }

    getAllMovie(){
      this.movielistservice.getAllMovie()
      .subscribe({
        next: (movies)=> {
          this.movies = movies;
        },
      });
    }

    addMovie(){
       this.movielistservice.addMovie(this.newMovie)
       .subscribe({
           next: (movie) => {
            console.log('Movie added successfully:', movie);
           }
           
       });
    }

    onWatchedChange(id: string, movie: Movie){
      movie.watched = !movie.watched;
       this.movielistservice.UpdateMovie(id, movie)
       .subscribe({
        next:(response) =>{
          this.getAllMovie();
        }
       });
    }

    deleteMovie(id: string){
         this.movielistservice.deleteMovie(id)
         .subscribe({
          next : (response) =>{
            this.getAllMovie();
          }
         });
    }
}
