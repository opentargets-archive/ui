export type getArrayElementType<
  ArrayType extends readonly unknown[]
> = ArrayType[number];
