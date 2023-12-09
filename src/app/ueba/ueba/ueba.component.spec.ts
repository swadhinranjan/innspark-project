import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UebaComponent } from './ueba.component';

describe('UebaComponent', () => {
  let component: UebaComponent;
  let fixture: ComponentFixture<UebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
