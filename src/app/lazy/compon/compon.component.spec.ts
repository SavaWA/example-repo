import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponComponent } from './compon.component';

describe('ComponComponent', () => {
  let component: ComponComponent;
  let fixture: ComponentFixture<ComponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
