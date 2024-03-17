
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userJson = localStorage.getItem('user');
  constructor(private router: Router) {

  }
 public logout(){
 localStorage.setItem("user","")
 localStorage.setItem("lectuerer", "")
 window.location.reload();
//  this.router.navigate(["/home"])
}
isLecturer(){
  const l=localStorage.getItem("lectuerer")
  if(l=="true")
  return true
return false
}
}
