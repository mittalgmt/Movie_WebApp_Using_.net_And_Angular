import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovielistService } from '../../services/movielist.service';
@Component({
  selector: 'app-deleted-movie',
  templateUrl: './deleted-movie.component.html',
  styleUrl: './deleted-movie.component.css'
})
export class DeletedMovieComponent implements OnInit {
  movies : Movie[]=[];

   constructor(private  movielistService : MovielistService) {}

   ngOnInit(): void {
      this.getAllDeletedMovies();
   }

   getAllDeletedMovies(){
    this.movielistService.getAllDeletedMovies()
    .subscribe({
       next: (res) =>{
        this.movies = res;
       }
    });
   }


   undoDeletedMovie(id: string, movie: Movie){
       this.movielistService.undoDeletedMovie(id, movie)
         .subscribe({
          next: (res) => {
            this.getAllDeletedMovies();
           
          }
         });
   }
}
