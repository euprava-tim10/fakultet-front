import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavrsiStudijeComponent } from './zavrsi-studije.component';

describe('ZavrsiStudijeComponent', () => {
  let component: ZavrsiStudijeComponent;
  let fixture: ComponentFixture<ZavrsiStudijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZavrsiStudijeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZavrsiStudijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
