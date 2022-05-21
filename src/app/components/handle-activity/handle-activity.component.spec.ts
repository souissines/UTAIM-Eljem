import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleActivityComponent } from './handle-activity.component';

describe('HandleActivityComponent', () => {
  let component: HandleActivityComponent;
  let fixture: ComponentFixture<HandleActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
