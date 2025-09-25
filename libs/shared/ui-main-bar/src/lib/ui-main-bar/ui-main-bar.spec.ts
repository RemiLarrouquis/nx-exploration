import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiMainBar } from './ui-main-bar';

describe('UiMainBar', () => {
  let component: UiMainBar;
  let fixture: ComponentFixture<UiMainBar>;

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

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
