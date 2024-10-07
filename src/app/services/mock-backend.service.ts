import { Injectable } from '@angular/core';
import { TreeNode } from '../types/tree-model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockBackendService {
  public getTreeData(): Observable<TreeNode[]> {
    const nodeTreeData: TreeNode[] = [
      {
        name: 'guitars',
        isOpen: false,
        parent: null,
        children: [
          {
            name: 'acoustic',
            isOpen: false,
            parent: null,
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
    return of(nodeTreeData).pipe(delay(1500));
  }
}
