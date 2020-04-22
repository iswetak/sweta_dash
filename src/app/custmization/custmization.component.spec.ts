import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmizationComponent } from './custmization.component';

describe('CustmizationComponent', () => {
  let component: CustmizationComponent;
  let fixture: ComponentFixture<CustmizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustmizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
