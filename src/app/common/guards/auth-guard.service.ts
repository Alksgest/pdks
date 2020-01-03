import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthorizationService) { }

  canActivate() {
    if (this.authService.isAdmin) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
