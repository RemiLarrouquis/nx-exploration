import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { Skeleton } from 'primeng/skeleton';
import { Divider } from 'primeng/divider';
import { OrganizationChart } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'architecture-feature-liste-taches',
  imports: [Skeleton, Divider, OrganizationChart],
  templateUrl: './feature-liste-taches.html',
  styleUrl: './feature-liste-taches.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureListeTaches implements OnInit {
  chargement = signal(true);
  data: TreeNode[] = [
    {
      label: 'Argentina',
      expanded: true,
      data: 'ar',
      children: [
        {
          label: 'Argentina',
          expanded: true,
          data: 'ar',
          children: [
            {
              label: 'Argentina',
              data: 'ar',
            },
            {
              label: 'Croatia',
              data: 'hr',
            },
          ],
        },
        {
          label: 'France',
          expanded: true,
          data: 'fr',
          children: [
            {
              label: 'France',
              data: 'fr',
            },
            {
              label: 'Morocco',
              data: 'ma',
            },
          ],
        },
      ],
    },
  ];

  ngOnInit() {
    setTimeout(() => this.chargement.set(false), 5000);
  }
}
