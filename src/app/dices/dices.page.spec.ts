import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DicesPage } from './dices.page';

describe('DicesPage', () => {
  let component: DicesPage;
  let fixture: ComponentFixture<DicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
