import { Injectable } from '@angular/core';
import { TreeNode } from '../types/tree-model';

@Injectable({
  providedIn: 'root',
})
export class TreeNodeService {
  toggleNode(node: TreeNode) {
    node.isOpen = !node.isOpen;
  }
  addNode(parent: TreeNode, childName: string): void {
    const newChild: TreeNode = {
      name: childName,
      isOpen: false,
      children: [],
      parent,
    };

    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push(newChild);
  }

  removeNode(nodeToRemove: TreeNode, children: TreeNode[]): boolean {
    const index = children.findIndex((node) => node === nodeToRemove);
    if (index !== -1) {
      children.splice(index, 1);
      return true;
    }

    for (const child of children) {
      if (child.children && this.removeNode(nodeToRemove, child.children)) {
        return true;
      }
    }

    return false;
  }

  getPathToNode(node: TreeNode): string {
    const path: string[] = [];
    let currentNode: TreeNode | null = node;

    while (currentNode) {
      path.unshift(currentNode.name);
      currentNode = currentNode.parent;
    }

    return path.join(' > ');
  }

  setParentLinks(nodes: TreeNode[], parent: TreeNode | null = null): void {
    for (const node of nodes) {
      node.parent = parent;
      if (node.children) {
        this.setParentLinks(node.children, node);
      }
    }
  }
}
