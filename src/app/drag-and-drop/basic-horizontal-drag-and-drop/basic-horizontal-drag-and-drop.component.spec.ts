import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHorizontalDragAndDropComponent } from './basic-horizontal-drag-and-drop.component';

describe('BasicHorizontalDragAndDropComponent', () => {
  let component: BasicHorizontalDragAndDropComponent;
  let fixture: ComponentFixture<BasicHorizontalDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicHorizontalDragAndDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHorizontalDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
