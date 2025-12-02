import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExplorationFeatureAffichageDescriptions } from './exploration-feature-affichage-descriptions';

describe('ExplorationFeatureAffichageDescriptions', () => {
  let component: ExplorationFeatureAffichageDescriptions;
  let fixture: ComponentFixture<ExplorationFeatureAffichageDescriptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorationFeatureAffichageDescriptions],
    }).compileComponents();

    fixture = TestBed.createComponent(ExplorationFeatureAffichageDescriptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
