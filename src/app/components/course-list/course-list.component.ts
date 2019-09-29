import { Component, OnInit } from '@angular/core';

import { CourseListService } from './../../courselist.service'
import { Course } from './../../course.model'


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses:Course[]

  constructor(private courseListService:CourseListService) { }

  ngOnInit() {
    this.courseListService.getCourses().subscribe(courses => {
      this.courses = courses
    })
  }
}
