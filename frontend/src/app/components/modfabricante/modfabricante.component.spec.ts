import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfabricanteComponent } from './modfabricante.component';

describe('ModfabricanteComponent', () => {
  let component: ModfabricanteComponent;
  let fixture: ComponentFixture<ModfabricanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfabricanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
