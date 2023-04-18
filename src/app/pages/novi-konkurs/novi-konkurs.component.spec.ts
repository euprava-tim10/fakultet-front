import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviKonkursComponent } from './novi-konkurs.component';

describe('NoviKonkursComponent', () => {
  let component: NoviKonkursComponent;
  let fixture: ComponentFixture<NoviKonkursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoviKonkursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoviKonkursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
