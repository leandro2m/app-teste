import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'Condomínio Alphaville';

  constructor(
    private router: Router,
    public authService: AuthService,
  ) {
  }

  ngOnInit() {
    if (!this.authService.checkAuth()) {
      this.router.navigateByUrl('login');
    }
  }
}
