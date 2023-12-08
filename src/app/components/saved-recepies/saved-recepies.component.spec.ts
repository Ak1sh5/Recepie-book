import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRecepiesComponent } from './saved-recepies.component';

describe('SavedRecepiesComponent', () => {
  let component: SavedRecepiesComponent;
  let fixture: ComponentFixture<SavedRecepiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedRecepiesComponent]
    });
    fixture = TestBed.createComponent(SavedRecepiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
