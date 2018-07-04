import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSliderComponent } from './icon-slider.component';

describe('IconSliderComponent', () => {
  let component: IconSliderComponent;
  let fixture: ComponentFixture<IconSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
