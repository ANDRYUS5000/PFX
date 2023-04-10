import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModrefpcComponent } from './modrefpc.component';

describe('ModrefpcComponent', () => {
  let component: ModrefpcComponent;
  let fixture: ComponentFixture<ModrefpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModrefpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModrefpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
