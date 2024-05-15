import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDialogComponent } from './parent-dialog.component';

describe('ParentDialogComponent', () => {
  let component: ParentDialogComponent;
  let fixture: ComponentFixture<ParentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentDialogComponent]
    });
    fixture = TestBed.createComponent(ParentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
