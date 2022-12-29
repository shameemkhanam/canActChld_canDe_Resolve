import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit, OnDestroy {
  course: any;
  courseId: any;
  routeParamObs: any;
  editMode: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CoursesService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.course = this.service.courses.find(x => x.id == this.courseId);

    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find((x) => x.id == this.courseId);
    });

    //to retriev query parameter value also 2 methods: 1.using snapshot 2.using observable

    //snapshot
    // this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));

    //observable
    this.activatedRoute.queryParamMap.subscribe((param) => {
        this.editMode = Boolean(param.get('edit'));
      }
    );
  }

  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }

  appendQueryParams() {
    this.router.navigate(['/courses/course', this.courseId], {
      queryParams: { edit: true },
    });
  }
}
