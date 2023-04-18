import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthManagerService} from "../auth-manager.service";

@Injectable()
export class IsStudent implements CanActivate {

    constructor(
        private authManagerService: AuthManagerService,
        private router: Router
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authManagerService.isStudent())
            return true;

        return this.router.parseUrl('/');
    }
}
