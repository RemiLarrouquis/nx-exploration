import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  DesignationCode,
  ExplorationService,
  Objectif,
} from '@nx-exploration/exploration-data';
import { AvancementUiTimelineObjectifs } from '@nx-exploration/avancement-ui-timeline-objectifs';

@Component({
  selector: 'signal-signal-feature-avancement',
  imports: [AvancementUiTimelineObjectifs],
  templateUrl: './signal-feature-avancement.html',
  styleUrl: './signal-feature-avancement.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalFeatureAvancement implements OnInit {
  objectifs: Objectif[] = [];

  explorationService = inject(ExplorationService);

  ngOnInit(): void {
    this.objectifs = this.explorationService
      .consulter(DesignationCode.SIGNAL)
      .recupererObjectifs();
  }
}
