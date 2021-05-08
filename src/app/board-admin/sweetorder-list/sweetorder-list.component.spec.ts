import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetorderListComponent } from './sweetorder-list.component';

describe('SweetorderListComponent', () => {
  let component: SweetorderListComponent;
  let fixture: ComponentFixture<SweetorderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetorderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetorderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
