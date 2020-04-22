import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtempComponent } from './dashtemp.component';

describe('DashtempComponent', () => {
  let component: DashtempComponent;
  let fixture: ComponentFixture<DashtempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashtempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
