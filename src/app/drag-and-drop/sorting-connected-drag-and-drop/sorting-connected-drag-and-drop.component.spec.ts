import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingConnectedDragAndDropComponent } from './sorting-connected-drag-and-drop.component';

describe('SortingConnectedDragAndDropComponent', () => {
  let component: SortingConnectedDragAndDropComponent;
  let fixture: ComponentFixture<SortingConnectedDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingConnectedDragAndDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingConnectedDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
