import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "Course Details";
  _courses;

  constructor(private _service : CourseService) { }

  ngOnInit() {
    this._courses = this._service.getCourse();
  }

}
