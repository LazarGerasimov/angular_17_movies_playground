import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

const baseUrl = 'https://api.themoviedb.org/3/movie'

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: `${environment.movie_token}`
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>(`${baseUrl}/changes?page=1'`, options);

  }


}
