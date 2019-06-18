import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVerticalDragAndDropComponent } from './basic-vertical-drag-and-drop.component';

describe('BasicVerticalDragAndDropComponent', () => {
  let component: BasicVerticalDragAndDropComponent;
  let fixture: ComponentFixture<BasicVerticalDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicVerticalDragAndDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicVerticalDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
