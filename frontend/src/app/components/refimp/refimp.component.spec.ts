import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefimpComponent } from './refimp.component';

describe('RefimpComponent', () => {
  let component: RefimpComponent;
  let fixture: ComponentFixture<RefimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefimpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
