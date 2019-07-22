import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisatoComponent } from './misato.component';

describe('MisatoComponent', () => {
  let component: MisatoComponent;
  let fixture: ComponentFixture<MisatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
