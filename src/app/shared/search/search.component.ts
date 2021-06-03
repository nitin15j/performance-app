import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime,distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  label: string;
  searchUpdated: Subject<string> = new Subject<string>();
  
  constructor() {
    this.label = '';
   }


   ngOnInit(): void {
    this.searchUpdated.pipe(
                        debounceTime(100),
                        distinctUntilChanged()).subscribe(newText => {
                          this.search.emit(newText);
                        });
   }

  
  handleKey(value: any) {
    this.searchUpdated.next(this.label);
  }

}
