import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course.model';

@Pipe({
  name: 'courseFilter',
  standalone: true
})
  export class CourseFilterPipe implements PipeTransform {
    transform(courses: Course[], selectedCategoryId?: number, searchName?: string): Course[] {
      return courses.filter(course => {
        // סינון לפי קטגוריה
        console.log(selectedCategoryId+"8888888888888888888888")
        if (selectedCategoryId != undefined && selectedCategoryId != 0) {
          console.log(selectedCategoryId+"-----------------")
          return course.categoryId == selectedCategoryId;
          
        }
        
       
        
  
        // סינון לפי שם
        if (searchName != undefined) {
          console.log(selectedCategoryId+"-----8------------")
          return course.name.toLowerCase().includes(searchName.toLowerCase());
        }
  
        
        console.log(selectedCategoryId+"-----u------------")
        return true; // אם לא נבחר אף סינון, הראה את כל הקורסים
      });
    }

}
