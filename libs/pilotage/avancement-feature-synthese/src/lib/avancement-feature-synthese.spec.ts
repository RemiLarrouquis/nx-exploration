import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvancementFeatureSynthese } from './avancement-feature-synthese';

describe('AvancementFeatureSynthese', () => {
  let component: AvancementFeatureSynthese;
  let fixture: ComponentFixture<AvancementFeatureSynthese>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvancementFeatureSynthese],
    }).compileComponents();

    fixture = TestBed.createComponent(AvancementFeatureSynthese);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
