import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseComponent } from './verse.component';

describe('VerseComponent', () => {
  let component: VerseComponent;
  let fixture: ComponentFixture<VerseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerseComponent]
    });
    fixture = TestBed.createComponent(VerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
