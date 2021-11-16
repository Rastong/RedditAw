import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwComponent } from './aw.component';

describe('AwComponent', () => {
  let component: AwComponent;
  let fixture: ComponentFixture<AwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
