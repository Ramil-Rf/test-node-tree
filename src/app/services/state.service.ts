import { inject, Injectable } from '@angular/core';
import { TreeNode } from '../types/tree-model';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { MockBackendService } from './mock-backend.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly mockService = inject(MockBackendService);
  private treeSubject$ = new BehaviorSubject<TreeNode[]>([]);
  public nodeTree$: Observable<TreeNode[]> = this.treeSubject$.asObservable();

  public setState(): void {
    this.mockService
      .getTreeData()
      .pipe(take(1))
      .subscribe((data) => this.treeSubject$.next(data));
  }
}
