import { Component } from '@angular/core';
import { IDeactivateComponent } from '../canDeactivate_guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent{
  firstname: any;
  lastname: any;
  country: any;
  subject: any;

  canExit() {
    if (this.firstname || this.lastname || this.country || this.subject) {
      return confirm('You have unsaved changes.Do you really want to discard changes?');
    }
    else {
      return true;
    }
  }
}
