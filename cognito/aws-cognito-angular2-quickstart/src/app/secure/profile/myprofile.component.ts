import {Component} from "@angular/core";
import {LoggedInCallback, UserLoginService, UserParametersService, CognitoUtil,Callback} from "../../service/cognito.service";
import {Router} from "@angular/router";
import {AccessTokenCallback, IdTokenCallback} from "../jwttokens/jwt.component";

export class Stuff {
    public accessToken: string;
    public idToken: string;
}

declare var AWS: any;
@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './myprofile.html'
})
export class MyProfileComponent implements LoggedInCallback {

	public stuff: Stuff = new Stuff();	
    public parameters: Array<Parameters> = [];
    public cognitoId: String;

    constructor(public router: Router, public userService: UserLoginService, public userParams: UserParametersService,  public cognitoUtil: CognitoUtil) {
        this.userService.isAuthenticated(this);
        console.log("In MyProfileComponent");
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            this.userParams.getParameters(new GetParametersCallback(this));
			     this.cognitoUtil.getAccessToken(new AccessTokenCallback(this));
            this.cognitoUtil.getIdToken(new IdTokenCallback(this));
			
        }
    }
}

export class Parameters {
    name: string;
    value: string;
}

export class GetParametersCallback implements Callback {

    constructor(public me: MyProfileComponent) {

    }

    callback() {

    }

    callbackWithParam(result: any) {

        for (let i = 0; i < result.length; i++) {
            let parameter = new Parameters();
            parameter.name = result[i].getName();
            parameter.value = result[i].getValue();
            this.me.parameters.push(parameter);
        }
        let param = new Parameters()
        param.name = "cognito ID";
        param.value = AWS.config.credentials.params.IdentityId;
        this.me.parameters.push(param)
    }
}
