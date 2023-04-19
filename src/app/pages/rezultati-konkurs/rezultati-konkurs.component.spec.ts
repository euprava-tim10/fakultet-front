import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezultatiKonkursComponent } from './rezultati-konkurs.component';

describe('RezultatiKonkursComponent', () => {
  let component: RezultatiKonkursComponent;
  let fixture: ComponentFixture<RezultatiKonkursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezultatiKonkursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezultatiKonkursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
