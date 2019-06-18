import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDragAndDropComponent } from './drag-and-drop/basic-drag-and-drop/basic-drag-and-drop.component';
import { SortingDragAndDropComponent } from './drag-and-drop/sorting-drag-and-drop/sorting-drag-and-drop.component';
import { SortingConnectedDragAndDropComponent } from './drag-and-drop/sorting-connected-drag-and-drop/sorting-connected-drag-and-drop.component';
import { BasicHorizontalDragAndDropComponent } from './drag-and-drop/basic-horizontal-drag-and-drop/basic-horizontal-drag-and-drop.component';
import { BasicVerticalDragAndDropComponent } from './drag-and-drop/basic-vertical-drag-and-drop/basic-vertical-drag-and-drop.component';
import { SortingPlaceHolderDragAndDropComponent } from './drag-and-drop/sorting-place-holder-drag-and-drop/sorting-place-holder-drag-and-drop.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicDragAndDropComponent,
    SortingDragAndDropComponent,
    SortingConnectedDragAndDropComponent,
    BasicHorizontalDragAndDropComponent,
    BasicVerticalDragAndDropComponent,
    SortingPlaceHolderDragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
