import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'learningWay',
  standalone: true
})
export class LearningWayPipe implements PipeTransform {

  transform(learningWay: any): any {
    console.log(learningWay);
    
    switch (learningWay) {
      case 1:
        return 'fas fa-book';
      case 0:
        return 'far fa-image';
        
      default:
        return '';
    }
  }

}
