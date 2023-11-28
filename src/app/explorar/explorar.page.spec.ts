import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ExplorarPage } from './explorar.page';

describe('ExplorarPage', () => {
  let component: ExplorarPage;
  let fixture: ComponentFixture<ExplorarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ExplorarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
