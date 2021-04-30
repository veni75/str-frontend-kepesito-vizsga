import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  movies: Movie[] = [];
  movieList$: Observable<Movie[]> = this.movieService.getMovieList();
  constructor(
    private movieService: HttpService,
  ) { }

  ngOnInit(): void {
  }

  getMovies(): void {
    this.movieList$ = this.movieService.getMovieList();
  }

  deleteMovie(id: number): void {     
    this.movieService.deleteMovie(id).subscribe(
      p => this.movieList$ = this.movieService.getMovieList()
    );
  }
}
