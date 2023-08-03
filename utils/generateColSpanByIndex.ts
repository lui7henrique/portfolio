const invertColSpanIndex = [2, 3, 6, 7, 10, 11];

export const generateColSpanByIndex = (index: number) => {
  if (invertColSpanIndex.includes(index)) {
    return index % 2 === 0 ? "col-span-1" : "col-span-2";
  }

  return index % 2 === 0 ? "col-span-2" : "col-span-1";
};
