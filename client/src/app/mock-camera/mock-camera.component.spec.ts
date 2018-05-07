import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCameraComponent } from './mock-camera.component';

describe('MockCameraComponent', () => {
  let component: MockCameraComponent;
  let fixture: ComponentFixture<MockCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
