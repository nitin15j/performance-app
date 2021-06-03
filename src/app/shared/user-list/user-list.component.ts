import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input()
  data:User[];
  
  @Output()
  userSelectEvent = new EventEmitter();

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'action'];

  constructor() { }


  selectUser(value: string) {
    this.userSelectEvent.emit(value);
  }

}
