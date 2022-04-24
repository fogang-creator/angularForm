import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user:User= new User();

  constructor( private fb:FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  
  onconnecte() {
    let isValideAuth:Boolean = this.userService.SingAuth(this.user);
    if(isValideAuth){
  this.router.navigate(['/']);
    } else{
      alert("Login ou mot de passe incorrecte!");
    }
  // console.log(this.user);
 
  }

}
