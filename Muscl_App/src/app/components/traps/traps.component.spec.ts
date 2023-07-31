import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapsComponent } from './traps.component';

describe('TrapsComponent', () => {
  let component: TrapsComponent;
  let fixture: ComponentFixture<TrapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
