import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviderComponent } from './devider.component';

describe('DeviderComponent', () => {
  let component: DeviderComponent;
  let fixture: ComponentFixture<DeviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
