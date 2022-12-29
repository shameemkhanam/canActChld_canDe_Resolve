import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
  navigateToHome() {
    this.route.navigate(['home']); //
    // this.route.navigateByUrl('home'); // both of these take absolute path even if v don't use '/'
    //if want to specify relative path...
    //first v should access currently active path
    // this.route.navigate(['home'], { relativeTo: this.activatedRoute });
  }
}
