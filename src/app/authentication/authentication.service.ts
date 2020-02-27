import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  login(username: string, password: string) {
    if ( username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      this.router.navigateByUrl('');
  }
  }


  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
}
}
