import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevariablesComponent } from './createvariables.component';

describe('CreatevariablesComponent', () => {
  let component: CreatevariablesComponent;
  let fixture: ComponentFixture<CreatevariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatevariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
