import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Objectif } from '@nx-exploration/exploration-data';
import { Timeline } from 'primeng/timeline';
import { Card } from 'primeng/card';

@Component({
  selector: 'pilotage-avancement-ui-timeline-objectifs',
  imports: [Timeline, Card],
  templateUrl: './avancement-ui-timeline-objectifs.html',
  styleUrl: './avancement-ui-timeline-objectifs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvancementUiTimelineObjectifs {
  valeurs = input.required<Objectif[]>();
}
