import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AllCoursesComponent } from './course/components/all-courses/all-courses.component';
import { NgFor, NgForOf } from '@angular/common';
import { LearningWayPipe } from './learning-way.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,NgFor,NgForOf,LearningWayPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pro';
}
