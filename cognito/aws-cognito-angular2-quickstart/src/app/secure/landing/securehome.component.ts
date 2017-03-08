import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoggedInCallback, UserLoginService, CognitoUtil } from "../../service/cognito.service";
import { AccessTokenCallback, IdTokenCallback} from '../jwttokens/jwt.component';

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './secureHome.html'
    // styleUrls: ['/assets/css/sb-admin.css']
})
export class SecureHomeComponent implements OnInit, LoggedInCallback {

    public stuff: any;


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
            this.util.getCurrentUser().getSession((err, session) => {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);

                } else {
                    console.log("redirect: session,  ", session);
                    this.redirectUrl(session);    
                }
                
            })
            
        }
    }    

    redirectUrl(token: any) {
        console.log("token", token);
        if(token.idToken['jwtToken'] == undefined || token.accessToken['jwtToken'] == undefined) {
            this.router.navigate(['/home/login']);
        } else {
            window.location.href = this.util.getRedirectUrl() + "/"+ token.idToken['jwtToken']+"/"+token.accessToken['jwtToken'];        
        }        
    }
}

