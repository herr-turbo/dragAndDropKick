import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sorting-place-holder-drag-and-drop',
  templateUrl: './sorting-place-holder-drag-and-drop.component.html',
  styleUrls: ['./sorting-place-holder-drag-and-drop.component.css']
})
export class SortingPlaceHolderDragAndDropComponent implements OnInit {

  movies = [
    'Le guet des orfèvres',
    'Mortimer',
    'Va-t-en guerre',
    'Le faucheur',
    'Procrastination',
    'Sourcellerie'
  ];

  
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor() { }

  ngOnInit() {
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }

  /**
 * A l'event de dépose, met à jour les arrays
 */
drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
}

}
