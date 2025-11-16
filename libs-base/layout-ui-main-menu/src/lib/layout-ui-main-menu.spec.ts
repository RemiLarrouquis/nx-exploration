import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutUiMainMenu } from './layout-ui-main-menu';

describe('LayoutUiMainMenu', () => {
  let component: LayoutUiMainMenu;
  let fixture: ComponentFixture<LayoutUiMainMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutUiMainMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutUiMainMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
