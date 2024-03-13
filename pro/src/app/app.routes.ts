import { Routes } from '@angular/router';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllCoursesComponent } from './course/components/all-courses/all-courses.component';
import { CourseDetailsComponent } from './course/components/course-details/course-details.component';
import { AddCourseComponent } from './course/components/edit-or-add/edit-or-add.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },


    { path: 'home', component: HomeComponent },


    { path: 'Login', component: LoginComponent },

    { path: 'register', component: RegisterComponent },
    { path: 'AllCourse', component: AllCoursesComponent },
    { path: 'courseDetails', component: CourseDetailsComponent },
    { path: 'EditCourse', component: AddCourseComponent },
    { path: '**', component: NotfoundComponent }
];

