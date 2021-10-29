import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openHelp(): void {
    const dialogRef = this.dialog.open(HelpDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
