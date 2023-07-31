import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerBackComponent } from './lower-back.component';

describe('LowerBackComponent', () => {
  let component: LowerBackComponent;
  let fixture: ComponentFixture<LowerBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
