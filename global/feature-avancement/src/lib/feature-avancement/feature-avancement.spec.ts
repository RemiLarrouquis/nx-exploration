import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAvancement } from './feature-avancement';

describe('FeatureAvancement', () => {
  let component: FeatureAvancement;
  let fixture: ComponentFixture<FeatureAvancement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAvancement],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAvancement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
