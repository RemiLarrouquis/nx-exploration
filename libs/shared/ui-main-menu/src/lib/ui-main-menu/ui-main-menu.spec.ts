import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiMainMenu } from './ui-main-menu';

describe('UiMainMenu', () => {
  let component: UiMainMenu;
  let fixture: ComponentFixture<UiMainMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiMainMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(UiMainMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
