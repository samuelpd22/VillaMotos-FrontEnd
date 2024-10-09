import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThevideoComponent } from './thevideo.component';

describe('ThevideoComponent', () => {
  let component: ThevideoComponent;
  let fixture: ComponentFixture<ThevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThevideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
