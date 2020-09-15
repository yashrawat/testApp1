import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialNoteDetailComponent } from './special-note-detail.component';

describe('SpecialNoteDetailComponent', () => {
  let component: SpecialNoteDetailComponent;
  let fixture: ComponentFixture<SpecialNoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialNoteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialNoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
