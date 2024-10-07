import { Component } from '@angular/core';
import { TreeNodeComponent } from '../tree-node/tree-node.component';
import { Tree, TreeNode } from '../../types/tree-model';

@Component({
  selector: 'app-tree-node-list',
  standalone: true,
  imports: [TreeNodeComponent],
  templateUrl: './tree-node-list.component.html',
  styleUrl: './tree-node-list.component.scss',
})
export class TreeNodeListComponent {
  public treeExample: Tree = [
    {
      name: 'guitars',
      isOpen: false,
      parent: null,
      children: [
        {
          name: 'acoustic',
          isOpen: false,
          parent: null, // Временно, будет обновлено позже
          children: [
            { name: 'Kremona', isOpen: false, parent: null },
            { name: 'Epiphone', isOpen: false, parent: null },
            { name: 'Gibson', isOpen: false, parent: null },
            { name: 'Yamaha', isOpen: false, parent: null },
          ],
        },
        {
          name: 'electric',
          isOpen: false,
          parent: null,
          children: [
            {
              name: 'Fender',
              isOpen: false,
              parent: null,
              children: [
                { name: 'Telecaster', isOpen: false, parent: null },
                { name: 'Stratocaster', isOpen: false, parent: null },
                { name: 'Jaguar', isOpen: false, parent: null },
              ],
            },
            {
              name: 'Gibson',
              isOpen: false,
              parent: null,
              children: [
                { name: 'Les Paul', isOpen: false, parent: null },
                { name: 'SG', isOpen: false, parent: null },
                { name: 'ES-335', isOpen: false, parent: null },
                { name: 'ES-339', isOpen: false, parent: null },
              ],
            },
          ],
        },
        { name: 'acoustic bass', isOpen: false, parent: null },
        { name: 'electric bass', isOpen: false, parent: null },
      ],
    },
  ];

  ngOnInit(): void {
    this.setParentLinks(this.treeExample);
  }

  setParentLinks(nodes: TreeNode[], parent: TreeNode | null = null): void {
    for (const node of nodes) {
      node.parent = parent;
      if (node.children) {
        this.setParentLinks(node.children, node);
      }
    }
  }

  removeNode(nodeToRemove: TreeNode, children: TreeNode[]) {
    const index = children.findIndex((node) => node === nodeToRemove);
    if (index !== -1) {
      children.splice(index, 1);
      return true; // Узел был найден и удален
    }

    for (let child of children) {
      if (child.children && this.removeNode(nodeToRemove, child.children)) {
        return true; // Узел был найден и удален в поддереве
      }
    }

    return false; // Узел не найден
  }
}
