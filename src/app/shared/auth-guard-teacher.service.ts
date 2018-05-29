import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { AuthService } from "../shared/auth/auth.service";

@Injectable()
export class AuthGuardTeacher implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.verifyTeacher().then(
            (verified: boolean) => {
                if(verified){
                    return true;
                }else{
                    console.log('Intrussion detected')
                    this.router.navigate(['/']);
                }
            }
        )
    }
}