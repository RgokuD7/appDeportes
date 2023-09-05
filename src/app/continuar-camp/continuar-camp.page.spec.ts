import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinuarCampPage } from './continuar-camp.page';

describe('ContinuarCampPage', () => {
  let component: ContinuarCampPage;
  let fixture: ComponentFixture<ContinuarCampPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContinuarCampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
