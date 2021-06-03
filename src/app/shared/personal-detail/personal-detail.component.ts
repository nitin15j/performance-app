import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { UserDetails } from '../user';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit, DoCheck {

  @Input()
  details:UserDetails;

  constructor() { }

  ngDoCheck():void{
    console.log("Personal details change called");
  }

  ngOnInit(): void {
  }

}
