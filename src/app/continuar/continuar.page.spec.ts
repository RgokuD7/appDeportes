import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContinuarPage } from './continuar.page';

describe('ContinuarPage', () => {
  let component: ContinuarPage;
  let fixture: ComponentFixture<ContinuarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ContinuarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
