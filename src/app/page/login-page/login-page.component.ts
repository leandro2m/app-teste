import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public authData = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private authService: AuthService, ) { }

  ngOnInit() {
    if (this.authService.checkAuth()) {
      this.router.navigateByUrl('home');
    }
  }

  login() {
      this.authService.login(this.authData).then(response => {
        this.router.navigateByUrl('home');
      });
  }

}
