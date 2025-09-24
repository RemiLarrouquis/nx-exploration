import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-ui-main-menu',
  imports: [],
  templateUrl: './ui-main-menu.html',
  styleUrl: './ui-main-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMainMenu {}
