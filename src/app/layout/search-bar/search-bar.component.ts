import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() query: EventEmitter<string> = new EventEmitter();
  private ngDestroy: Subject<any> = new Subject();
  public searchQuery: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.searchQuery.valueChanges
      .pipe(
        takeUntil(this.ngDestroy)
      )
      .subscribe({
        next: (q: string) => this.query.emit(q)
      });
  }

  ngOnDestroy() {
    this.ngDestroy.next(null);
    this.ngDestroy.complete();
  }

}
