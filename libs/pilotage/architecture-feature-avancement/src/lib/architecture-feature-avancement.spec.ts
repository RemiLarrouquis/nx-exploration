import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchitectureFeatureAvancement } from './architecture-feature-avancement';

describe('ArchitectureFeatureAvancement', () => {
  let component: ArchitectureFeatureAvancement;
  let fixture: ComponentFixture<ArchitectureFeatureAvancement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureFeatureAvancement],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureFeatureAvancement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
