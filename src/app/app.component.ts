import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeNodeListComponent } from './components/tree-node-list/tree-node-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TreeNodeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
