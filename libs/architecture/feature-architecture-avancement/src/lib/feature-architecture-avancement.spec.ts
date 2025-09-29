import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureArchitectureAvancement } from './feature-architecture-avancement';

describe('FeatureArchitectureAvancement', () => {
  let component: FeatureArchitectureAvancement;
  let fixture: ComponentFixture<FeatureArchitectureAvancement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureArchitectureAvancement],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureArchitectureAvancement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
