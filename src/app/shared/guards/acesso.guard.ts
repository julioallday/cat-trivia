import { LocalStorageService } from './../services/local-storage.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AcessoGuard implements CanActivate {
  constructor(
    private router: Router,
    private LocalStorageService: LocalStorageService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.LocalStorageService.verifyAuth('access')) {
      return true;
    } else {
      this.router.navigate(['sem-acesso']);
      return false;
    }
  }
}
// if (this.LocalStorageService.getStorage('acesso') != undefined) {
//   return true;
// } else {
//
//   return false;
// }
