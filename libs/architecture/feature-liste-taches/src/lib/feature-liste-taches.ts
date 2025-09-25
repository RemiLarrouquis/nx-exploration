import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'architecture-feature-liste-taches',
  imports: [Skeleton],
  templateUrl: './feature-liste-taches.html',
  styleUrl: './feature-liste-taches.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureListeTaches implements OnInit {
  chargement = signal(true);

  ngOnInit() {
    setTimeout(() => this.chargement.set(false), 5000);
  }
}
