import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModprocesadorComponent } from './modprocesador.component';

describe('ModprocesadorComponent', () => {
  let component: ModprocesadorComponent;
  let fixture: ComponentFixture<ModprocesadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModprocesadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModprocesadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
