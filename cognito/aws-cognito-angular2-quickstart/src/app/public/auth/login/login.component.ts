import { Component, OnInit }             from "@angular/core";
import { Router }                        from "@angular/router";
import { CognitoCallback, UserLoginService, LoggedInCallback, CognitoUtil, TransferService } from "../../../service/cognito.service";

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './login.html'
})
export class LoginComponent implements CognitoCallback, LoggedInCallback, OnInit {
    email: string;
    password: string;
    errorMessage: string;

    constructor(public router: Router,
                public userService: UserLoginService,
                public util: CognitoUtil,
                public transfer: TransferService) {

        console.log("LoginComponent constructor");
    }

    ngOnInit() {
        this.transfer.connect();
        this.transfer.send({"a": 'b'});

        this.errorMessage = null;
        console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
        this.userService.isAuthenticated(this);
    }

    onLogin() {
        if (this.email == null || this.password == null) {
            this.errorMessage = "All fields are required";
            return;
        }
        this.errorMessage = null;
        this.userService.authenticate(this.email, this.password, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { 
            //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
            if (this.errorMessage === 'User is not confirmed.') {
                console.log("redirecting");
                this.router.navigate(['/home/confirmRegistration', this.email]);
            }		
			else if (this.errorMessage === "Please provide a new password to complete authentication") {
				console.log("redirecting to new password");
				this.router.navigate(['/home/confirmNewPassword', this.email]);
			}
        } 

		else { 
            localStorage.setItem("token", JSON.stringify(result));
            window.location.href = this.util.getRedirectUrl() + "/"+ result.idToken['jwtToken']+"/"+result.accessToken['jwtToken'];
        }
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (isLoggedIn)
            this.router.navigate(['/securehome']);
    }
}