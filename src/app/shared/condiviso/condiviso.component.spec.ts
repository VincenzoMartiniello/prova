import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondivisoComponent } from './condiviso.component';

describe('CondivisoComponent', () => {
  let component: CondivisoComponent;
  let fixture: ComponentFixture<CondivisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondivisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondivisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
