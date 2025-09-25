import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiMainMenu } from '@nx-exploration/ui-main-menu';
import { UiMainBar } from '@nx-exploration/ui-main-bar';

@Component({
  imports: [RouterModule, UiMainMenu, UiMainBar],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'nx-exploration';
}
