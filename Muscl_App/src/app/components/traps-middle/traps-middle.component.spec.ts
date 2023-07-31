import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapsMiddleComponent } from './traps-middle.component';

describe('TrapsMiddleComponent', () => {
  let component: TrapsMiddleComponent;
  let fixture: ComponentFixture<TrapsMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrapsMiddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrapsMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
