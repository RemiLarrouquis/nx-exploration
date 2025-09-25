import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-ui-main-bar',
  imports: [],
  templateUrl: './ui-main-bar.html',
  styleUrl: './ui-main-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMainBar {}
