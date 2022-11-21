import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifTestComponent } from './ngif-test.component';

describe('NgifTestComponent', () => {
  let component: NgifTestComponent;
  let fixture: ComponentFixture<NgifTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
