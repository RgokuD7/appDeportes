import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoCampPage } from './nuevo-camp.page';

describe('NuevoCampPage', () => {
  let component: NuevoCampPage;
  let fixture: ComponentFixture<NuevoCampPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoCampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
