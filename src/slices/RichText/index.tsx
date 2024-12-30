import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RIchText`.
 */
export type RIchTextProps = SliceComponentProps<Content.RIchTextSlice>;

/**
 * Component for "RIchText" Slices.
 */
const RIchText = ({ slice }: RIchTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for r_ich_text (variation: {slice.variation}) Slices
    </section>
  );
};

export default RIchText;
