export type ComparatorAccessor<R extends {}> = (item: R) => string | number;
export type Comparator<R extends {}> = (itemA: R, itemB: R) => number;

const getComparator: <R extends {}>(
  accessor: ComparatorAccessor<R>
) => (itemA: R, itemB: R) => number = <R>(accessor: ComparatorAccessor<R>) => {
  const comparator = (itemA: R, itemB: R) => {
    const a = accessor(itemA);
    const b = accessor(itemB);
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  };
  return comparator;
};

export default getComparator;
