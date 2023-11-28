import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContinuarCampPage } from './continuar-camp.page';

describe('ContinuarCampPage', () => {
  let component: ContinuarCampPage;
  let fixture: ComponentFixture<ContinuarCampPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ContinuarCampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
