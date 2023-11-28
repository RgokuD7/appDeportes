import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AmistosoPage } from './amistoso.page';

describe('AmistosoPage', () => {
  let component: AmistosoPage;
  let fixture: ComponentFixture<AmistosoPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AmistosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
