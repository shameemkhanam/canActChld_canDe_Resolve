import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './course_guard.service';
import { CoursesService } from './Services/courses.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './canDeactivate_guard.service';
import { CourseResolveService } from './course_resolve.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent,
    CourseComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CoursesService, CourseGuardService, AuthService, CanDeactivateGuardService, CourseResolveService],
  bootstrap: [AppComponent],
})
export class AppModule {}
