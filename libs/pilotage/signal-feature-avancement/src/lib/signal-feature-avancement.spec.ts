import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalFeatureAvancement } from './signal-feature-avancement';

describe('SignalFeatureAvancement', () => {
  let component: SignalFeatureAvancement;
  let fixture: ComponentFixture<SignalFeatureAvancement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalFeatureAvancement],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalFeatureAvancement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
