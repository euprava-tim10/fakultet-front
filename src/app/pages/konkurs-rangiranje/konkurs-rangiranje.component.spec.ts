import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonkursRangiranjeComponent } from './konkurs-rangiranje.component';

describe('KonkursRangiranjeComponent', () => {
  let component: KonkursRangiranjeComponent;
  let fixture: ComponentFixture<KonkursRangiranjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonkursRangiranjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonkursRangiranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
