import { Step4Component } from './step4/step4.component';
import { Step3Component } from './step3/step3.component';
import { LayoutService } from './../layout/layout.service';
import { Step2Component } from './step2/step2.component';
import { Step1Component } from './step1/step1.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(
    public dialog: MatDialog,
    private layoutService: LayoutService
  ) { }

  start(): void {
    const dialogRef = this.dialog.open(Step1Component, {
      width: '350px',
      position: {
        top: '60px',
        right: '60px'
      },
      disableClose: true

    });

    dialogRef.afterClosed().subscribe(result => {
      this.step2();
    });
  }

  step2(): void {
    this.layoutService.openSideNav.next(true);
    const dialogRef = this.dialog.open(Step2Component, {
      width: '600px',
      position: {
        top: '110px',
        left: '150px'
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.step3()
    });
  }

  step3(): void {
    this.layoutService.openSideNav.next(true);
    const dialogRef = this.dialog.open(Step3Component, {
      width: '90%',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.step4()
    });
  }

  step4(): void {
    this.layoutService.openSideNav.next(true);
    const dialogRef = this.dialog.open(Step4Component, {
      width: '300px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
