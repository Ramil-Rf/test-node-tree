import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { TreeNodeComponent } from '../tree-node/tree-node.component';
import { TreeNode } from '../../types/tree-model';
import { TreeNodeService } from '../../services/tree-node.service';
import { StateService } from '../../services/state.service';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tree-node-list',
  standalone: true,
  imports: [TreeNodeComponent, AsyncPipe],
  templateUrl: './tree-node-list.component.html',
  styleUrl: './tree-node-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeNodeListComponent implements OnInit {
  private treeService = inject(TreeNodeService);
  private stateService = inject(StateService);
  public tree$ = this.stateService.nodeTree$;
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.stateService.setState();
    this.tree$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((treeNodes) => {
        if (treeNodes && treeNodes.length > 0) {
          this.treeService.setParentLinks(treeNodes);
        }
      });
  }

  public removeNode(nodeToRemove: TreeNode, children: TreeNode[]) {
    this.treeService.removeNode(nodeToRemove, children);
  }
}
