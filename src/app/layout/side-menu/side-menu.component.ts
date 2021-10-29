import { Component, OnInit } from '@angular/core';


export interface NavItems {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})


export class SideMenuComponent implements OnInit {
  navitems: NavItems[] = [
    {
      name: 'WELCOME',
      url: '/',
      icon: 'home'
    },
    {
      name: 'USERS',
      url: '/users',
      icon: 'person'
    }
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
