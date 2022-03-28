import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeComponentComponent } from './wellcome-component.component';

describe('WellcomeComponentComponent', () => {
  let component: WellcomeComponentComponent;
  let fixture: ComponentFixture<WellcomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellcomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
