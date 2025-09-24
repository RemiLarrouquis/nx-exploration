import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiMainBar } from './ui-main-bar';

describe('UiMainBar', () => {
  let component: UiMainBar;
  let fixture: ComponentFixture<UiMainBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiMainBar],
    }).compileComponents();

    fixture = TestBed.createComponent(UiMainBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
