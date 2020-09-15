import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialNoteComponent } from './special-note.component';

describe('SpecialNoteComponent', () => {
  let component: SpecialNoteComponent;
  let fixture: ComponentFixture<SpecialNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
