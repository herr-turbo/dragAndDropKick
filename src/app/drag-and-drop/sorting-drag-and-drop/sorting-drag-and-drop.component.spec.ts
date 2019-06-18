import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingDragAndDropComponent } from './sorting-drag-and-drop.component';

describe('SortingDragAndDropComponent', () => {
  let component: SortingDragAndDropComponent;
  let fixture: ComponentFixture<SortingDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingDragAndDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
