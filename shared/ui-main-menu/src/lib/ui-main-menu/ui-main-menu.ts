import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MegaMenuItem, PrimeIcons } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Dock } from 'primeng/dock';

@Component({
  selector: 'shared-ui-main-menu',
  imports: [CommonModule, Dock],
  templateUrl: './ui-main-menu.html',
  styleUrl: './ui-main-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMainMenu implements OnInit {
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Avancement',
        icon: PrimeIcons.ANGLE_DOUBLE_RIGHT,
      },
      {
        label: 'Architecture',
        icon: PrimeIcons.BOX,
      },
      {
        label: 'Nx projects',
        icon: PrimeIcons.COG,
      },
      {
        label: 'Nx Cloud',
        icon: PrimeIcons.CLOUD,
      },
    ];
  }
}
