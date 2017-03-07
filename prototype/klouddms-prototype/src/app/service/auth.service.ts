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
        if(JSON.parse(localStorage.getItem('auth'))['id'] == null) {
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

