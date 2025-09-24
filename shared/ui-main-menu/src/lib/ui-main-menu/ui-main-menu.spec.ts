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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
