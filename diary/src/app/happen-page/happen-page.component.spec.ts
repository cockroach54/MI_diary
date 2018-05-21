import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappenPageComponent } from './happen-page.component';

describe('HappenPageComponent', () => {
  let component: HappenPageComponent;
  let fixture: ComponentFixture<HappenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
