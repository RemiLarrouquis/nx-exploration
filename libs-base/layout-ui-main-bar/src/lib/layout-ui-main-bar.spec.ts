import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutUiMainBar } from './layout-ui-main-bar';

describe('LayoutUiMainBar', () => {
  let component: LayoutUiMainBar;
  let fixture: ComponentFixture<LayoutUiMainBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutUiMainBar],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutUiMainBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
