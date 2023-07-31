import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClavesComponent } from './claves.component';

describe('ClavesComponent', () => {
  let component: ClavesComponent;
  let fixture: ComponentFixture<ClavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
