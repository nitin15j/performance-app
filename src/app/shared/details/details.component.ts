import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserDetails } from '../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DetailsComponent  {

  @Input()
  details:UserDetails;
  constructor() { }
}
