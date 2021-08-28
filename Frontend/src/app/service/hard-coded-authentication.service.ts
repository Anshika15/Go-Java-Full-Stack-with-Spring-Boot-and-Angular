import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardCodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    // console.log('before '+ this.isUserLoggedIn());
    if (username == 'AnshikaBansal' && password == 'anshika') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}