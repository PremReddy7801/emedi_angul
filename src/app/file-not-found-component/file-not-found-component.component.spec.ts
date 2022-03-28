import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNotFoundComponentComponent } from './file-not-found-component.component';

describe('FileNotFoundComponentComponent', () => {
  let component: FileNotFoundComponentComponent;
  let fixture: ComponentFixture<FileNotFoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileNotFoundComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileNotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
