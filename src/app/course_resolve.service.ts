import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { CoursesService } from './Services/courses.service';

@Injectable()
export class CourseResolveService implements Resolve {
  constructor(private coursesService: CoursesService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.coursesService.getAllCourses().then((data) => {
      return data;
    });
  }
}
