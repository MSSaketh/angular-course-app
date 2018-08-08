import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './course.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
