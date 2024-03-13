export enum wayOfLearning
{ 
    Frontaly,
    Zoom,
}
export class Course {
    
    id!: number;
    name!: string;
    categoryId!: number;
    lessonsAmount!: number;
    dateOfStart!: string; 
    silibus!: string[]; 
    lecturerId!: number;
    image!: string;
    wayOfLearning!: wayOfLearning;

}
