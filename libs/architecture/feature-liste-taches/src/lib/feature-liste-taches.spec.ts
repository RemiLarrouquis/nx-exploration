import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureListeTaches } from './feature-liste-taches';

describe('FeatureListeTaches', () => {
  let component: FeatureListeTaches;
  let fixture: ComponentFixture<FeatureListeTaches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureListeTaches],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureListeTaches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
