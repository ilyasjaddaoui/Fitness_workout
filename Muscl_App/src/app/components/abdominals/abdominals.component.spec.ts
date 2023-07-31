import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdominalsComponent } from './abdominals.component';

describe('AbdominalsComponent', () => {
  let component: AbdominalsComponent;
  let fixture: ComponentFixture<AbdominalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbdominalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbdominalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
