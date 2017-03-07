import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoggedInCallback, UserLoginService, CognitoUtil} from "../../service/cognito.service";

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './secureHome.html'
    // styleUrls: ['/assets/css/sb-admin.css']
})
export class SecureHomeComponent implements OnInit, LoggedInCallback {

    constructor(public router:      Router, 
                public userService: UserLoginService,
                public util:        CognitoUtil) {

        this.userService.isAuthenticated(this);
        console.log("SecureHomeComponent: constructor");
    }

    ngOnInit() {

    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            let result = JSON.parse(localStorage.getItem('token'));
            // console.log(this.util.getCurrentUser().getSession());
            window.location.href = this.util.getRedirectUrl() + "/"+ result.idToken['jwtToken']+"/"+result.accessToken['jwtToken'];
        }
    }
}

