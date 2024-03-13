// import { Component, OnInit } from '@angular/core';
// import { CourseService } from '../../../course.service';
// import { Router } from '@angular/router';
// import { Course } from '../../../course.model';
// import { CommonModule, NgFor } from '@angular/common';
// import { CategoryService } from '../../../category.service';
// import { category } from '../../../category.model';


// @Component({
//   selector: 'app-all-courses',
//   standalone:true,
//   imports:[CommonModule,NgFor],
//   templateUrl: './all-courses.component.html',
//   styleUrl: './all-courses.component.scss'
// })
// export class AllCoursesComponent implements OnInit{
//   constructor(private router: Router ,private courseService: CourseService,private caregoty: CategoryService) {

//   }
//  public courses!:Course[]
//  public caregoty2!:category[]
//  selectedCategoryId?: number;
//   searchName?: string;
//  ngOnInit(): void {
//   this.courseService.getCourseFromServer().subscribe({
//     next: (res) => {
//       this.courses= res
//       console.log(this.courses)
//     },
//     error:(err)=>{
//       console.log(err)
//     }
    
//   })
//   this.caregoty.getCategoryFromServer().subscribe({
//     next: (res) => {
//       this.caregoty2= res
//       console.log(this.courses)
//     },
//     error:(err)=>{
//       console.log(err)
//     }
    
//   })


// }
// public details(p:Course){ console.log(p)
//   console.log("1111111111111111111111111111111111111111111111")
//   let pJson = JSON.stringify(p)
//       //  const user = localStorage.setItem("user", p)
//   this.router.navigate(["/courseDetails"],{queryParams:{course:pJson}})
//   }
// }



// import { Component, NgModule, OnInit } from '@angular/core';
// import { CourseService } from '../../../course.service';
// import { Router } from '@angular/router';
// import { Course, wayOfLearning } from '../../../course.model';
// import { CommonModule, NgFor } from '@angular/common';
// import { CategoryService } from '../../../category.service';
// import { Category } from '../../../category.model';
// import { FormsModule } from '@angular/forms';
// import { CourseFilterPipe } from "../../../course-filter.pipe";
// import { HeaderComponent } from "../../../header/header.component";


// @Component({
//     selector: 'app-all-courses',
//     standalone: true,
//     templateUrl: './all-courses.component.html',
//     styleUrls: ['./all-courses.component.scss'],
//     imports: [CommonModule, NgFor, FormsModule, CourseFilterPipe, HeaderComponent]
// })
// export class AllCoursesComponent implements OnInit {
//   constructor(
//     private router: Router,
//     private courseService: CourseService,
//     private categoryService: CategoryService
//   ) {}
//   userJson = localStorage.getItem('user');
//   public courses!: Course[];
//   public categories!: Category[];

//   selectedCategoryId: number=0;
//   searchName?: string;
//   selectedWayOfLearning?: wayOfLearning;

//   ngOnInit(): void {
//     this.courseService.getCourseFromServer().subscribe({
//       next: (res) => {
//         this.courses = res;
//         console.log(this.courses);
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });

//     this.categoryService.getCategoryFromServer().subscribe({
//       next: (res) => {
//         this.categories = res;
//         console.log(this.categories);
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });

//     this.filterCourses(); // הפעל סינון לאחר קבלת הנתונים מהשרת
//   }

//   filterCourses() {
//     this.courses = this.courses.filter(course => {
//       console.log(this.selectedCategoryId+"8888888888888888888888")
//       // סינון לפי קטגוריה
//       if (this.selectedCategoryId != undefined && this.selectedCategoryId !== 0) {
//         return course.categoryId == this.selectedCategoryId;
//       }

//       // סינון לפי שם
//       if (this.searchName !== undefined) {
//         console.log(this.selectedCategoryId+"-----8------------")
//         return course.name.toLowerCase().includes(this.searchName.toLowerCase());
//       }

//       console.log(this.selectedCategoryId+"-----u------------")
//       return true; // אם לא נבחר אף סינון, הראה את כל הקורסים
//     });
//   }

//   details(p: Course) {
//     console.log(p);
//     console.log("1111111111111111111111111111111111111111111111111");
//     let pJson = JSON.stringify(p);
//     this.router.navigate(["/courseDetails"], { queryParams: { course: pJson } });
//   }
//   public ranon(){
//     window.location.reload();
//   }
// }
import { Component, NgModule, OnInit } from '@angular/core';
import { CourseService } from '../../../course.service';
import { Router } from '@angular/router';
import { Course, wayOfLearning } from '../../../course.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseFilterPipe } from "../../../course-filter.pipe";
import { HeaderComponent } from "../../../header/header.component";
import { Category } from '../../../category.model';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
  imports: [CommonModule, NgFor, FormsModule, CourseFilterPipe, HeaderComponent]
})
export class AllCoursesComponent implements OnInit {
  constructor(
    private router: Router,
    private courseService: CourseService,
    private categoryService: CategoryService
  ) {}

  userJson = localStorage.getItem('user');
  public courses!: Course[];
  public categories!: Category[];

  selectedCategoryId: number = 0;
  searchName?: string;
  selectedWayOfLearning?: wayOfLearning;

  ngOnInit(): void {
    this.courseService.getCourseFromServer().subscribe({
      next: (res) => {
        this.courses = res;
        console.log(this.courses);
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.categoryService.getCategoryFromServer().subscribe({
      next: (res) => {
        this.categories = res;
        console.log(this.categories);
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.filterCourses(); // Apply filter on data retrieval
  }

  filterCourses(categoryId?: number) {
    this.selectedCategoryId!= categoryId ;
    this.courses = this.courses.filter(course => {
      // Filter by category
      if (this.selectedCategoryId != undefined && this.selectedCategoryId != 0) {
        return course.categoryId == this.selectedCategoryId;
      }

      // Filter by wayOfLearning
      if (this.selectedWayOfLearning != undefined) {
        return course.wayOfLearning == this.selectedWayOfLearning;
      }

      // Filter by search name
      if (this.searchName != undefined) {
        return course.name.toLowerCase().includes(this.searchName.toLowerCase());
      }
      window.location.reload();
      // Show all courses if no filters are selected
      return true;
    });
  }

  details(p: Course) {
    console.log(p);
    console.log("1111111111111111111111111111111111111111111111111");
    let pJson = JSON.stringify(p);
    this.router.navigate(["/courseDetails"], { queryParams: { course: pJson } });
  }

  public ranon() {
    window.location.reload();
  }
}