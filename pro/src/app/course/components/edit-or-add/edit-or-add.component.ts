// import { Component, NgModule, OnInit } from '@angular/core';

// import { Course, wayOfLearning } from '../../../course.model';
//   // Import the Course model
// import { FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule, NgModel, FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { REACTIVE_NODE } from '@angular/core/primitives/signals';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CourseService } from '../../../course.service';
// import { CategoryService } from '../../../category.service';
// import { category } from '../../../category.model';


// @Component({
//   selector: 'app-edit-or-add',
//   standalone: true,
//   imports: [CommonModule,ReactiveFormsModule,FormsModule],
//   templateUrl: './edit-or-add.component.html',
 
// })

// export class AddCourseComponent  implements OnInit {
//     constructor(private router: Router,private activerouter : ActivatedRoute ,private categoryService: CategoryService,private courseService: CourseService) {


//     }
//     ngOnInit(): void {
  
//       this.activerouter.queryParams.subscribe(params => {
//       this.course2=params["course"]
//       this.CurrentCourse=JSON.parse(this.course2)
      
//       })
//        this.categoryService.getCategoryFromServer().subscribe({
//          next: (res) => {
//            this.categories= res
//            console.log(this.categories)
//          },
//          error:(err)=>{
//            console.log(err)
//          }        
//        }  
//      )
//    }

   
//     courseId:number=0
//     course2!:string
    
//     CurrentCourse!:Course
//     wayOfLearning2!:wayOfLearning
//     courseForm: FormGroup = new FormGroup({
//         name: new FormControl('', [Validators.required]),
//         categoryId: new FormControl(null, [Validators.required]),
//         lessonsAmount: new FormControl(null, [Validators.required]),
//         dateOfStart: new FormControl('', [Validators.required]),
//         silibus: new FormArray([
//           new FormControl('', [Validators.required]),
//         ]),

//         image: new FormControl('', [Validators.required]),
//         wayOfLearning: new FormControl(wayOfLearning.Frontaly),
//       });
  

//   public categories!:category[]

 
//   get silibus() {
//     return this.courseForm.get('silibus') as FormArray;
//   }

//   addSilabusItem() {
//     this.silibus.push(new FormControl('', [Validators.required]));
//   }

//   removeSilabusItem(index: number) {
//     this.silibus.removeAt(index);
//   }
//   onSubmit() {

//       const courseData: Course = this.courseForm.value;
//      const cat:number= courseData.categoryId
//       console.log(this.CurrentCourse)
//       console.log({id:this.courseId++,name:courseData.name,categoryId:courseData.categoryId,image:courseData.image,lessonsAmount:courseData.lessonsAmount,silibus:courseData.silibus,lecturerId:1,wayOfLearning:courseData.wayOfLearning,dateOfStart:courseData.dateOfStart})
//       if(!this.CurrentCourse){
//       this.courseService.save({id:this.courseId++,name:courseData.name,categoryId:courseData.categoryId,image:courseData.image,lessonsAmount:courseData.lessonsAmount,silibus:courseData.silibus,lecturerId:1,wayOfLearning:courseData.wayOfLearning,dateOfStart:courseData.dateOfStart}).subscribe({
//         next: (res) => {
//          console.log("-----------------------------------")
//           console.log(courseData)
//         },
//         error:(err)=>{
//             console.log({id:this.courseId++,name:courseData.name,categoryId:2,image:courseData.image,lessonsAmount:courseData.lessonsAmount,silibus:courseData.silibus,lecturerId:1,wayOfLearning:courseData.wayOfLearning,dateOfStart:courseData.dateOfStart})
//             console.log("--------------yyyyyyyyyyyyyyyyyy---------------------")
//           console.log(err)
//         }

        
//       })
//     }
//     else{
//         const course:Course=this.CurrentCourse
//         this.courseService.PutCourse(course.id,{id:this.courseId++,name:courseData.name,categoryId:2,image:courseData.image,lessonsAmount:courseData.lessonsAmount,silibus:courseData.silibus,lecturerId:1,wayOfLearning:courseData.wayOfLearning,dateOfStart:courseData.dateOfStart}).subscribe({
//             next: (res) => {
             
//               console.log(courseData)
//             },
//             error:(err)=>{
//               console.log(err)
//             }
            
//           })
//     }
      
      
    
//   }
// }
import { Component, NgModule, OnInit } from '@angular/core';

import { Course, wayOfLearning } from '../../../course.model';
// Import the Course model
import { FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule, NgModel, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { REACTIVE_NODE } from '@angular/core/primitives/signals';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../course.service';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../category.model';
import { HeaderComponent } from "../../../header/header.component"

;

@Component({
    selector: 'app-edit-or-add',
    standalone: true,
    templateUrl: './edit-or-add.component.html',
    imports: [CommonModule, ReactiveFormsModule, FormsModule, HeaderComponent]
})
export class AddCourseComponent implements OnInit {
  constructor(
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((params) => {
      this.course2 = params['course'];
      if (this.course2) {
        this.CurrentCourse = JSON.parse(this.course2);
        this.updateFormValues(this.CurrentCourse);
      }

      this.categoryService
        .getCategoryFromServer()
        .subscribe({
          next: (res) => {
            this.categories = res;
            console.log(this.categories);
          },
          error: (err) => {
            console.log(err);
          },
        });
    });
  }

  courseId: number = 0;
  course2!: string;
  CurrentCourse!: Course ;
  wayOfLearning2!: wayOfLearning;
  courseForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    categoryId: new FormControl(null, [Validators.required]),
    lessonsAmount: new FormControl(null, [Validators.required]),
    dateOfStart: new FormControl('', [Validators.required]),
    silibus: new FormArray([new FormControl('', [Validators.required])]),
    image: new FormControl('', [Validators.required]),
    wayOfLearning: new FormControl(wayOfLearning.Frontaly,[Validators.required]),
  });

  public categories!: Category[];

  get silibus() {
    return this.courseForm.get('silibus') as FormArray;
  }

  addSilabusItem() {
    this.silibus.push(new FormControl('', [Validators.required]));
  }
 getSilabusItem(num:number) {
   return this.silibus.at(num);
  }


  removeSilabusItem(index: number) {
    this.silibus.removeAt(index);
  }

  updateFormValues(course: Course) {
    const silibusFormArray = this.courseForm.get('silibus') as FormArray;
    silibusFormArray.clear();

    course.silibus.forEach((silibusItem) => {
      silibusFormArray.push(new FormControl(silibusItem, [Validators.required]));
    });
    console.log(course,"ghjk")
    this.courseForm.patchValue({
      name: course.name,
      categoryId: course.categoryId, // Assuming categoryId is a number in the Course model
      lessonsAmount: course.lessonsAmount,
      dateOfStart: course.dateOfStart,
      image:course.image,
    
      wayOfLearning: course.wayOfLearning,
    });
   
  //  console.log(course.wayOfLearning )
  //  if(course.wayOfLearning===0)
  //  {
  //   console.log("zzzzzzzz")
  //   this.courseForm.patchValue({wayOfLearning:0})
    
  //  }
  //  else{
  //   console.log("hjkjhghjkl")
  //   this.courseForm.patchValue({wayOfLearning:1})
  //  }
  //   // Update wayOfLearning
  //   this.courseForm.get('wayOfLearning')?.setValue(course.wayOfLearning);
   }


   onSubmit() {
    const courseData: Course = this.courseForm.value;
     // if (this.CurrentCourse) {
     //   // Update existing course
     //   console.log(this.CurrentCourse.id)
     //   this.courseService
       
     //     .PutCourse(this.CurrentCourse.id, {id:courseData.id,name:courseData.name,categoryId:2,image:courseData.image,lessonsAmount:courseData.lessonsAmount,silibus:courseData.silibus,lecturerId:1,wayOfLearning:courseData.wayOfLearning,dateOfStart:courseData.dateOfStart})
     //     .subscribe({
     //       next: (res) => {
     //         console.log(courseData);
     //       },
     //       error: (err) => {
     //         console.log(err);
     //       },
     //     });
     // } else {
       // Create new course
       courseData.id = this.courseId++; // Assuming courseId is a number for new courses
       let id:number=0;
       let v={id:0,name:"",address:"",email:"",password:""}
       let lJson = localStorage.getItem('user');
       if (lJson !== null && lJson !== undefined && typeof lJson === 'string') {
          v = JSON.parse(lJson);
       }
       if(this.CurrentCourse?.id)
       {
         id=this.CurrentCourse.id;
       }
       else
       id=0;
      console.log(courseData.silibus)
       this.courseService
         .save({id:id,name:courseData.name,categoryId:courseData.categoryId,image:courseData.image,lessonsAmount:courseData.lessonsAmount,silibus:courseData.silibus,lecturerId:v.id,wayOfLearning:courseData.wayOfLearning,dateOfStart:courseData.dateOfStart})
         .subscribe({
           next: (res) => {
             console.log(courseData);
             this.router.navigate(["/AllCourse"]);
 
           },
           error: (err) => {
             console.log(err);
           },
         });
     }
     getSyllabusControl(index: number) {
      return this.silibus.at(index) as FormControl;
    }
  
  
   }
  
 
 