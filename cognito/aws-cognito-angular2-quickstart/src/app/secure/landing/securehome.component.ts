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
        this.stuff = {
            idToken: '',
            accessToken: ''
        }
    }

    ngOnInit() {

    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            let result = JSON.parse(localStorage.getItem('token'));
            
            if(result != null) {
                this.redirectUrl(result);
            } else {
                this.util.getCurrentUser().getSession((err, session) => {
                    if (err) {
                        console.log("CognitoUtil: Can't set the credentials:" + err);

                    } else {
                        this.redirectUrl({idToken: session.getAccessToken().getJwtToken(),
                                          accessToken: session.getIdToken().getJwtToken()});    
                    }
                    
                })
            }
            
        }
    }    

    redirectUrl(token: any) {
        if(token.idToken == "undefined" || token.accessToken == "undefined") this.router.navigate(['/home/login']);
        window.location.href = this.util.getRedirectUrl() + "/"+ token.idToken['jwtToken']+"/"+token.accessToken['jwtToken'];    
    }
}

