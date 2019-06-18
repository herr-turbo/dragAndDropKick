import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingPlaceHolderDragAndDropComponent } from './sorting-place-holder-drag-and-drop.component';

describe('SortingPlaceHolderDragAndDropComponent', () => {
  let component: SortingPlaceHolderDragAndDropComponent;
  let fixture: ComponentFixture<SortingPlaceHolderDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingPlaceHolderDragAndDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingPlaceHolderDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
