import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaKonkursComponent } from './prijava-konkurs.component';

describe('PrijavaKonkursComponent', () => {
  let component: PrijavaKonkursComponent;
  let fixture: ComponentFixture<PrijavaKonkursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavaKonkursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrijavaKonkursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
