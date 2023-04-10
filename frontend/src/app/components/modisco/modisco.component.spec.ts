import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiscoComponent } from './modisco.component';

describe('ModiscoComponent', () => {
  let component: ModiscoComponent;
  let fixture: ComponentFixture<ModiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiscoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
