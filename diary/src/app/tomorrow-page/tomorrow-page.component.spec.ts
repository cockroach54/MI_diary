import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomorrowPageComponent } from './tomorrow-page.component';

describe('TomorrowPageComponent', () => {
  let component: TomorrowPageComponent;
  let fixture: ComponentFixture<TomorrowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomorrowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomorrowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
