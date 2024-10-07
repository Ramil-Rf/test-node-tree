export type TreeNode = {
  name: string;
  children?: TreeNode[];
  isOpen: boolean;
  parent: TreeNode | null;
};

export type Tree = TreeNode[];
