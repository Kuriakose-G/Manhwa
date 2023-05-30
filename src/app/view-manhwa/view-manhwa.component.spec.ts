import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManhwaComponent } from './view-manhwa.component';

describe('ViewManhwaComponent', () => {
  let component: ViewManhwaComponent;
  let fixture: ComponentFixture<ViewManhwaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewManhwaComponent]
    });
    fixture = TestBed.createComponent(ViewManhwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
