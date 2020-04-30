import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSpinnerComponent } from './meu-spinner.component';

describe('MeuSpinnerComponent', () => {
  let component: MeuSpinnerComponent;
  let fixture: ComponentFixture<MeuSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
