import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibiteComponent } from './bibite.component';

describe('BibiteComponent', () => {
  let component: BibiteComponent;
  let fixture: ComponentFixture<BibiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibiteComponent]
    });
    fixture = TestBed.createComponent(BibiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
