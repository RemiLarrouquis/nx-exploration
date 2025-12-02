import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  viewChild,
} from '@angular/core';
import { Objectif } from '@nx-exploration/exploration-data';
import { Timeline } from 'primeng/timeline';
import { Card } from 'primeng/card';
import {
  AnimateOnScroll,
  AnimateOnScrollModule,
} from 'primeng/animateonscroll';

@Component({
  selector: 'pilotage-avancement-ui-timeline-objectifs',
  imports: [Timeline, Card, AnimateOnScrollModule],
  templateUrl: './avancement-ui-timeline-objectifs.html',
  styleUrl: './avancement-ui-timeline-objectifs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvancementUiTimelineObjectifs implements OnInit {
  valeurs = input.required<Objectif[]>();

  // Gestion de la directive d'animation
  desactiverAnimation = input<boolean>(false);
  animationOnScroll = viewChild<AnimateOnScroll>('animationOnScroll');

  ngOnInit(): void {
    if (this.desactiverAnimation()) {
      this.animationOnScroll()?.enter();
    }
  }
}
