import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { CoursesService } from './Services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoursesService],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'AngularRouting';

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((value) => {
      console.log(value);
      this.jumpTo(value as string);
    });
  }

  jumpTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  login() {
    //take value from login of authService..
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
