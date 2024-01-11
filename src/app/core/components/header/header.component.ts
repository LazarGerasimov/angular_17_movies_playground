import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private auth = inject(AuthService);

  @Input({
    required: true
  }) userImg: string = ''

  navList = ["Home", "TV Shows", "New & Popular", "Browse by Language"];

  signOut() {
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
