import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinuarPage } from './continuar.page';

describe('ContinuarPage', () => {
  let component: ContinuarPage;
  let fixture: ComponentFixture<ContinuarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContinuarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
