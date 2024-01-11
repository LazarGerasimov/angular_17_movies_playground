import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  private auth = inject(AuthService);
  public name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  public userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  public email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;
  
  
  

  signOut() {
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();

  }
}
