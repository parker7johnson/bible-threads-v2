import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextReadComponent } from './next-read.component';

describe('NextReadComponent', () => {
  let component: NextReadComponent;
  let fixture: ComponentFixture<NextReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextReadComponent]
    });
    fixture = TestBed.createComponent(NextReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
