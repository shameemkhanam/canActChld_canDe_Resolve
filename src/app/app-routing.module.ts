import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from './course_guard.service';
import { CanDeactivateGuardService } from './canDeactivate_guard.service';
import { CourseResolveService } from './course_resolve.service';

const appRoute: Routes = [
  { path: '', component: HomeComponent }, //default route
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact',
    canDeactivate: [CanDeactivateGuardService],
    component: ContactComponent,
  },
  { path: 'courses', component: CoursesComponent, resolve: {courses: CourseResolveService}},
  // { path: 'courses/course/:id', component: CourseComponent },
  {
    path: 'courses',
    canActivateChild: [CourseGuardService],
    children: [
      {
        path: 'course/:id',
        component: CourseComponent,
      },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
