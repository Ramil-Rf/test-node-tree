import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeNode } from '../../types/tree-model';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss',
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  @Output() deleteNode = new EventEmitter<TreeNode>();

  toggleNode(event: Event) {
    event.stopPropagation();
    this.node.isOpen = !this.node.isOpen;
  }

  addChild(event: Event) {
    event.stopPropagation();
    const childName = prompt('Введите название дочерней ноды:');
    if (childName) {
      const newChild: TreeNode = {
        name: childName,
        isOpen: false,
        children: [],
        parent: this.node,
      };
      if (!this.node.children) {
        this.node.children = []; // Инициализируем массив детей, если он не существует
      }

      this.node.children.push(newChild); // Добавляем нового ребенка
    }
  }

  removeNode(event: Event) {
    event.stopPropagation();
    this.deleteNode.emit(this.node);
  }

  showPath(event: Event) {
    event.stopPropagation();
    const path = this.getPathToNode(this.node);
    console.log(path);
  }

  getPathToNode(node: TreeNode): string {
    const path: string[] = [];
    let currentNode: TreeNode | null = node;

    while (currentNode) {
      path.unshift(currentNode.name); // Добавляем имя узла в начало массива
      currentNode = currentNode.parent; // Переходим к родительскому узлу
    }

    return path.join(' > '); // Возвращаем путь в виде строки
  }
}
