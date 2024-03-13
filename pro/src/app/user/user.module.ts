import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from "../header/header.component";



@NgModule({
    declarations: [RegisterComponent, LoginComponent],
    imports: [
        CommonModule, ReactiveFormsModule,
        HeaderComponent
    ]
})
export class UserModule { }
