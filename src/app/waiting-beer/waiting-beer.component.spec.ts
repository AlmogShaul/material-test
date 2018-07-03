import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingBeerComponent } from './waiting-beer.component';

describe('WaitingBeerComponent', () => {
  let component: WaitingBeerComponent;
  let fixture: ComponentFixture<WaitingBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
