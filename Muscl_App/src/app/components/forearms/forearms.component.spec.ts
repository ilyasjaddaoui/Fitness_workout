import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForearmsComponent } from './forearms.component';

describe('ForearmsComponent', () => {
  let component: ForearmsComponent;
  let fixture: ComponentFixture<ForearmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForearmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForearmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
