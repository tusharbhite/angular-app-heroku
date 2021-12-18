import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTemComponent } from './top-tem.component';

describe('TopTemComponent', () => {
  let component: TopTemComponent;
  let fixture: ComponentFixture<TopTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
