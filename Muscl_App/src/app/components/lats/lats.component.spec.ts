import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatsComponent } from './lats.component';

describe('LatsComponent', () => {
  let component: LatsComponent;
  let fixture: ComponentFixture<LatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
