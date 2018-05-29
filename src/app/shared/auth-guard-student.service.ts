import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { AuthService } from "../shared/auth/auth.service";

@Injectable()
export class AuthGuardStudent implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.verifyStudent().then(
            (verifiedSt: boolean) => {
                if(verifiedSt){
                    return true;
                }else{
                    console.log('Intrussion detected')
                    this.router.navigate(['/']);
                }
            }
        )
    }
}