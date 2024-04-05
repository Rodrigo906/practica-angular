import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponentComponent } from './main-page.component.component';

describe('MainPageComponentComponent', () => {
  let component: MainPageComponentComponent;
  let fixture: ComponentFixture<MainPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageComponentComponent]
    });
    fixture = TestBed.createComponent(MainPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
