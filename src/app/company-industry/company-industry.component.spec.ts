import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIndustryComponent } from './company-industry.component';

describe('CompanyIndustryComponent', () => {
  let component: CompanyIndustryComponent;
  let fixture: ComponentFixture<CompanyIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
