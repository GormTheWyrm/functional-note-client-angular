import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiddlepageComponent } from './fiddlepage.component';

describe('FiddlepageComponent', () => {
  let component: FiddlepageComponent;
  let fixture: ComponentFixture<FiddlepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiddlepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiddlepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
