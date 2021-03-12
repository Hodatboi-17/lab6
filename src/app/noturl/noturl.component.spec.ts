import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoturlComponent } from './noturl.component';

describe('NoturlComponent', () => {
  let component: NoturlComponent;
  let fixture: ComponentFixture<NoturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoturlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
