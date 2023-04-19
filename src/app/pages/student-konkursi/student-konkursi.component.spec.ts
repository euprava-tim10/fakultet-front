import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentKonkursiComponent } from './student-konkursi.component';

describe('StudentKonkursiComponent', () => {
  let component: StudentKonkursiComponent;
  let fixture: ComponentFixture<StudentKonkursiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentKonkursiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentKonkursiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
