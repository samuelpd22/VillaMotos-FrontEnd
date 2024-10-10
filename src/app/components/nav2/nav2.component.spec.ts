import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav2Component } from './nav2.component';

describe('Nav2Component', () => {
  let component: Nav2Component;
  let fixture: ComponentFixture<Nav2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nav2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
