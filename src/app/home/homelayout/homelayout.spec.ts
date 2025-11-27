import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homelayout } from './homelayout';

describe('Homelayout', () => {
  let component: Homelayout;
  let fixture: ComponentFixture<Homelayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Homelayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homelayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
