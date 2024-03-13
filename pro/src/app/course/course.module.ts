import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { LearningWayPipe } from '../learning-way.pipe';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    LearningWayPipe // ייבוא CommonModule כאן
  ]
  
})
export class CourseModule { }
