import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService ) { }

//authConnecte = this.userService.logeuser  non car formulaire non connecté
  ngOnInit(): void {
    
  }

  
  

}
