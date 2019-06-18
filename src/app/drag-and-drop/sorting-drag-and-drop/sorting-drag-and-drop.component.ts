import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sorting-drag-and-drop',
  templateUrl: './sorting-drag-and-drop.component.html',
  styleUrls: ['./sorting-drag-and-drop.component.css']
})
export class SortingDragAndDropComponent implements OnInit {

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi'
  ];

  constructor() { }

  ngOnInit() {
  }


  /**
   * Permet de binder la view avec le modèle
   * dans ce cas on modifie la place du film dans l'array après qu'il changé dans la view
   **/
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
