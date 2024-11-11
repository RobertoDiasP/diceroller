import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtocoloPage } from './protocolo.page';

describe('ProtocoloPage', () => {
  let component: ProtocoloPage;
  let fixture: ComponentFixture<ProtocoloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
