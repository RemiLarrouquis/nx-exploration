import { Component, OnInit } from '@angular/core';
import { Dock } from 'primeng/dock';
import { MegaMenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'layout-layout-ui-main-menu',
  imports: [Dock],
  templateUrl: './layout-ui-main-menu.html',
  styleUrl: './layout-ui-main-menu.css',
})
export class LayoutUiMainMenu implements OnInit {
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
