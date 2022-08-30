import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    // pop up - are you sure?
    // yes? - call service - log user out - navigate...
    //   this.router.navigate(['home']);

  }

}
