import { LayoutService } from './layout/layout.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
  sidnavSubscription: Subscription;


  constructor(
    private layoutService: LayoutService
  ) {

  }
  title = 'rain-test-app';

  ngOnInit(): void {
    this.sidnavSubscription = this.layoutService.openSideNav.subscribe((res) => {
      if (res) {
        this.drawer.open();
      }
    }, error => {
      console.log(error)
    });
  }
}
