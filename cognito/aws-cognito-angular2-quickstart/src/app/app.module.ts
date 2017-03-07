import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {UserRegistrationService, UserLoginService, UserParametersService, CognitoUtil, TransferService} from "./service/cognito.service";
import {routing} from "./app.routes";
import {HomeComponent, AboutComponent, HomeLandingComponent} from "./public/home.component";
import {AwsUtil} from "./service/aws.service";
import {UseractivityComponent} from "./secure/useractivity/useractivity.component";
import {MyProfileComponent} from "./secure/profile/myprofile.component";
import {SecureHomeComponent} from "./secure/landing/securehome.component";
import {JwtComponent} from "./secure/jwttokens/jwt.component";
import {Ng2AutoCompleteModule} from "ng2-auto-complete";
import {Ng2UploaderModule} from "ng2-uploader";
import {LoginComponent} from "./public/auth/login/login.component";
import {RegisterComponent} from "./public/auth/register/registration.component";
import {ForgotPasswordStep1Component, ForgotPassword2Component} from "./public/auth/forgot/forgotPassword.component";
import {LogoutComponent, RegistrationConfirmationComponent} from "./public/auth/confirm/confirmRegistration.component";
import {ResendCodeComponent} from "./public/auth/resend/resendCode.component";
import {NewPasswordRequiredComponent} from "./public/auth/newPasswordRequired/newPasswordRequired.component";

@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent,
        RegistrationConfirmationComponent,
        ResendCodeComponent,
        ForgotPasswordStep1Component,
        ForgotPassword2Component,
        RegisterComponent,
        AboutComponent,
        HomeLandingComponent,
        HomeComponent,
        UseractivityComponent,
        MyProfileComponent,
        SecureHomeComponent,
        JwtComponent,
        AppComponent,
		NewPasswordRequiredComponent
    ],
    imports: [
        Ng2AutoCompleteModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2UploaderModule,
        routing
    ],
    providers: [
        CognitoUtil,
        AwsUtil,
        UserRegistrationService,
        UserLoginService,
        UserParametersService,
        TransferService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
