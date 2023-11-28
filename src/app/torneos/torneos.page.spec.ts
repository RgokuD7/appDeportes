import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TorneosPage } from './torneos.page';

describe('TorneosPage', () => {
  let component: TorneosPage;
  let fixture: ComponentFixture<TorneosPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TorneosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
