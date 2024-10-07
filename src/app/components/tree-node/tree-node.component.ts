import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { TreeNode } from '../../types/tree-model';
import { TreeNodeService } from '../../services/tree-node.service';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeNodeComponent {
  private treeService = inject(TreeNodeService);
  @Input() node!: TreeNode;
  @Output() deleteNode = new EventEmitter<TreeNode>();

  public toggleNode(event: Event) {
    event.stopPropagation();
    this.treeService.toggleNode(this.node);
  }

  public addChild(event: Event) {
    event.stopPropagation();
    const childName = prompt('Введите название дочерней ноды:');
    if (childName) {
      this.treeService.addNode(this.node, childName);
    }
  }

  public removeNode(event: Event) {
    event.stopPropagation();
    this.deleteNode.emit(this.node);
  }

  public showPath(event: Event) {
    event.stopPropagation();
    const path = this.treeService.getPathToNode(this.node);
    console.log(path);
  }
}
