import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardependenciaComponent } from './creardependencia.component';

describe('CreardependenciaComponent', () => {
  let component: CreardependenciaComponent;
  let fixture: ComponentFixture<CreardependenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreardependenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreardependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
