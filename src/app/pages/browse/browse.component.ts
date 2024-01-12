import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  private auth = inject(AuthService);
  public movieService = inject(MovieService);
  public name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  public userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  public email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res => {
      console.log(res)
    })
  }


  signOut() {
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
