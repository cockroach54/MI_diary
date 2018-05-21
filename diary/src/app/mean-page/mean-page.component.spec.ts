import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanPageComponent } from './mean-page.component';

describe('MeanPageComponent', () => {
  let component: MeanPageComponent;
  let fixture: ComponentFixture<MeanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
