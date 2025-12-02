import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvancementUiTimelineObjectifs } from './avancement-ui-timeline-objectifs';

describe('AvancementUiTimelineObjectifs', () => {
  let component: AvancementUiTimelineObjectifs;
  let fixture: ComponentFixture<AvancementUiTimelineObjectifs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvancementUiTimelineObjectifs],
    }).compileComponents();

    fixture = TestBed.createComponent(AvancementUiTimelineObjectifs);
    fixture.componentRef.setInput('valeurs', []);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
