import { TutorialService } from './../../tutorial/tutorial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private tutorialService: TutorialService
  ) { }

  ngOnInit(): void {
  }

  startTutorial(): void {
    this.tutorialService.start();
  }

}
