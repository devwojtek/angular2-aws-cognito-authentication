import {Injectable} from "@angular/core";

/**
 * Created by Vladimir Budilov
 */

@Injectable()
export class AuthService {

    authUrl: string = "http://localhost:4200/home/login";

    constructor() {
        
    }    

    isLogged() {
        let token = JSON.parse(localStorage.getItem('auth'));
        if(token['id'] == null || token['id'] == "undefined") {
            return false;
        } else {
            return true;
        }
    }

    getAuthServerUrl() {
        return this.authUrl;
    }

    setAuth(id: string, access: string) {
        localStorage.setItem('auth', JSON.stringify({id: id, access: access}));
    }
}

