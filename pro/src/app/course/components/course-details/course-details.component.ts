import { Component, OnInit } from '@angular/core';
import { Course, wayOfLearning } from '../../../course.model';
import { CourseService } from '../../../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../category.model';
import { LecturerService } from '../../../lecturer.service';
import { User } from '../../../user.model';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from "../../../header/header.component";


@Component({
    selector: 'app-course-details',
    standalone: true,
    templateUrl: './course-details.component.html',
    styleUrl: './course-details.component.scss',
    imports: [CommonModule, NgFor, HeaderComponent]
   
})
export class CourseDetailsComponent implements OnInit{

  constructor(private router: Router, private Route:ActivatedRoute ,private courseService: CourseService,private categoryService:CategoryService,private Lecturers:LecturerService) {
  }
  // id!: number;
  // name!: string;
  // categoryId!: number;
  // lessonsAmount!: number;
  // dateOfStart!: string; 
  // silibus!: string[]; 
  // lecturerId!: number;
  // image!: string;
  // wayOfLearning!: wayOfLearning;
  public course2!:string
public course!:Course
public category!:Category[]
public categoryId !: Category
public TheSameName!:boolean
public lecturer!:User[]
public lecturerCourse!:User
public isLec!:string
  ngOnInit(): void {
    console.log(this.course?.wayOfLearning)
    this.Lecturers.getLecture().subscribe({
      next: (res) => {
        this.lecturer = res.filter(c=>c.id=this.course.lecturerId)
        this.lecturerCourse=this.lecturer[0]
    
        let lJson = localStorage.getItem('user');
        if (lJson !== null && lJson !== undefined && typeof lJson === 'string') {
          let v = JSON.parse(lJson);
          console.log ( v.id) 
          if (this.lecturerCourse.id === v.id) {
            console.log("444444444444444444444444444444")
    this.isLec="true"
          }
          else{
            console.log("99999999999999999999999999999999999")
            this.isLec=""
          }
     }
      console.log(this.lecturer+"lecture")
      },
      error:(err)=>{
        console.log(err)
      } ,  
    })  ; 
    
    
     
// this.course=this.router.params[cours]
this.Route.queryParams.subscribe(params => {
  console.log("----------------h-----------")
  // this.id= parseInt(params["id"]);
  // this.name=params["name"];
  // this.categoryId=parseInt(params["categoryId"])
  // this.lessonsAmount=parseInt(params["lessonsAmount"])
  // this.dateOfStart=params["dateOfStart"]
  // this.silibus=params["silibus"]
  // this.lecturerId=parseInt(params["lecturerId"])
  // this.image=params["image"]
  // this.wayOfLearning=params["wayOfLearning"]
  // console.log( params)
  //this.course={id:this.id,name:this.name,categoryId:this.categoryId,lessonsAmount:this.lessonsAmount,dateOfStart:this.dateOfStart,silibus:this.silibus,lecturerId:this.lecturerId,image:this.image,wayOfLearning:this.wayOfLearning}
  console.log(this.course)
  console.log("333333333333333333333333333333333333333")
  this.course2=params["course"]
this.course=JSON.parse(this.course2)
 });


// this.courseService.getCourseById(this.courseId).subscribe({
//   next: (res) => {
//     this.course = res     
//   },
//   error:(err)=>{
//     console.log(err)
//   }
// })

this.categoryService.getCategoryFromServer().subscribe({
  next: (res) => {
   console.log(this.course.categoryId+"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")

   let r= res.find(c=>c.id==this.course.categoryId)
    console.log(this.category)
    if(r)
    this.categoryId=r
  },
  error:(err)=>{
    console.log(err)
  }
})
  }
 public edit(course : Course){
  let pJson = JSON.stringify(course)
  //  const user = localStorage.setItem("user", p)
this.router.navigate(["/EditCourse"],{queryParams:{course:pJson}})
 
 }

}
