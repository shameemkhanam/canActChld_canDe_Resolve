import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class CourseGuardService implements CanActivate, CanActivateChild{
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   //this canActivate takes 2 parameters, one of type ActivatedRouteSnapshot & another of type RouterStateSnapshot.
  //   //And it returns either a boolean value or an observable or a promise...here v want to return only boolean value
  // }

  constructor(private authService: AuthService, private router: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // return false;
    if (this.authService.isAuthenticated()) {
      return true;
    }
    else {
      //first navigate , for navigating v need router parameter
      this.router.navigate(['']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }
}