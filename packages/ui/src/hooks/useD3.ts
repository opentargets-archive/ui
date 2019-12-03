import { useRef, useEffect } from "react";
import { select } from "d3";

// see https://observablehq.com/@herrstucki/react-hooks-and-d3

const useD3 = (f: any) => {
  const ref = useRef<SVGElement>();

  useEffect(() => {
    ref.current && f(select<SVGElement, {}>(ref.current));
  });

  return ref;
};

export default useD3;
