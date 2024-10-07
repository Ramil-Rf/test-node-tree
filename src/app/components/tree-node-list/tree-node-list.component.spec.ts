import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNodeListComponent } from './tree-node-list.component';

describe('TreeNodeListComponent', () => {
  let component: TreeNodeListComponent;
  let fixture: ComponentFixture<TreeNodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeNodeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeNodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
