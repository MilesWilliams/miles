import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppConfig } from 'src/app/core/config/app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleClicked = new EventEmitter();
  public emailAddress: string = AppConfig.emailAddress;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggleClicked.emit();
  }

}
