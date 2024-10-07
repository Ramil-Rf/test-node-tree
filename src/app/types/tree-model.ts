export type TreeNode = {
  name: string;
  children?: TreeNode[];
  isOpen: boolean;
  parent: TreeNode | null;
};
