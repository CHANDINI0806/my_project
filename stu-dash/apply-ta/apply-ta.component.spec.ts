import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTaComponent } from './apply-ta.component';

describe('ApplyTaComponent', () => {
  let component: ApplyTaComponent;
  let fixture: ComponentFixture<ApplyTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyTaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
