import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Course } from './course.model'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  courseListUrl = 'http://localhost:6789/api/courses'

  constructor(private http:HttpClient) { }

  getCourses():Observable<Course[]> {
    return this.http.get<Course[]>(this.courseListUrl)
  }
}
