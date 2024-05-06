import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './components/movielist/movielist.component';
import { DeletedMovieComponent } from './components/deleted-movie/deleted-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MovielistComponent
  },
  {
    path:'movielist',
    component:  MovielistComponent
  },
  {
    path:'deleted-movies',
    component: DeletedMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
