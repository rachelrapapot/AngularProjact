import { Component, OnInit} from '@angular/core';
import { UserService } from '../../../user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserModule } from '../../user.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  public addForm!: FormGroup;
 public static id:number=0;
  constructor(private router: Router,private _UserService: UserService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    let name :string=""
    this.activatedRoute.queryParams.subscribe(params => {
     name= params["name"];
    });
    this.addForm = new FormGroup({
      'name': new FormControl(name, [Validators.required, Validators.minLength(2)]),
      'password': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required)
    });
  }
  register(){
    let p = this.addForm.value
    this._UserService.getUserFromServer().subscribe({
      next: (res) => {
     let find= res.find(r=>(r.name==p.name&&r.password==p.password))
     if (find)
     {
   
      let userJson = JSON.stringify(find)
       const user = localStorage.setItem("user", userJson)
       alert("you are already exist")
     this.router.navigate(["/home"])
     }
     else
    {
      console.log(p)
      this._UserService.save({id:5,name:p.name,password:p.password,email:p.email,address:p.address}).subscribe({
        next: (res) => {
          
      this.router.navigate(["/AllCourse"])
    },
    error: (err) => {
      console.log(err);
    }
})
}
      },
      error: (err) => {
        console.log(err);
      }
})
}
}
