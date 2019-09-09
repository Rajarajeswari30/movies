import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavalbumsComponent } from './favalbums.component';

describe('FavalbumsComponent', () => {
  let component: FavalbumsComponent;
  let fixture: ComponentFixture<FavalbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavalbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
