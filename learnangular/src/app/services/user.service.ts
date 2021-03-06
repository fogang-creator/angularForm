import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/users.model";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    { username: 'admin', passeword: '1234', roles: ['ADMIN'] },
    { username: 'vero', passeword: '1234', roles: ['USER'] },
  ];

  //propriété pour stocker les utilisateurs connecter
  public logeuser!: string;
  public islogin: boolean = false;
  public logerole!: string[];

  constructor(  private route: Router) {}

  SingAuth(auth: User): Boolean {
    let logeAuth: boolean = false;

    this.users.forEach((current) => {
      if (
        auth.username == current.username &&
        auth.passeword == current.passeword
      ) {
        logeAuth = true;
        this.logeuser = current.username;
        this.logerole = current.roles;
        this.islogin = true;
        localStorage.setItem('logeuser', this.logeuser);
        localStorage.setItem('islogin', String(this.islogin));
      }
    });
    return logeAuth;
  }

  isAdmin(): Boolean{
if(!this.logerole) return false; //undefinite= pas de role retourn false
return (this.logerole.indexOf('ADMIN')> -1); 
//retourne la position de la chaine ADMIN lorquel existe dans le tableau sinon retourn -1
  }

  logout(){
    this.logeuser!= undefined
   this.islogin = false;
   this.logerole!= undefined;
   localStorage.removeItem('logeuser');
   localStorage.setItem('islogin', String(this.islogin));
   this.route.navigate(['/']);
  }

}