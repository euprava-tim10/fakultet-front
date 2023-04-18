import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKonkursiComponent } from './admin-konkursi.component';

describe('AdminKonkursiComponent', () => {
  let component: AdminKonkursiComponent;
  let fixture: ComponentFixture<AdminKonkursiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKonkursiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminKonkursiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
