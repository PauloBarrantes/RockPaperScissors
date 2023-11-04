import { FunctionComponent, SVGProps } from "react";

interface Element {
  name: string;
  className: string;
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  beats: string[];
}

export default Element;
