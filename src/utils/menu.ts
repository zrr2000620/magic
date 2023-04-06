export function arrayToTree(arr: any[], pid = null) {
  return arr
    .filter((item) => item.pid === pid)
    .map((child) => ({
      ...child,
      ...(child.frontProperties ? JSON.parse(child.frontProperties) : {}),
      children: arrayToTree(arr, child.id),
    }));
}
