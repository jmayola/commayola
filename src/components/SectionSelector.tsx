import React, { type JSX } from "react";
import * as motion from "motion/react-client";
export type Sections = {
  element: JSX.Element;
  name: string;
};
type Props = {
  selected: Sections;
  assign: (sector: Sections) => void;
  sections: Sections[];
};
const SectionSelector: React.FC<Props> = ({ selected, assign, sections }) => {
  return (
    <motion.div className="p-10 absolute bottom-0 right-0 left-0 w-2/3 m-auto rounded-t-4xl flex flex-row gap-5 place-items-end place-content-end">
      {sections &&
        sections.map((val, i) => {
          if (val.name === selected.name) {
            return null;
          } else {
            return (
              <motion.button
                key={i}
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.95, borderBottomWidth: "1px" }}
                whileHover={{ scale: 1.05 }}
                className="p-5 w-2/3 bg-zinc-900 rounded-2xl border-b-4 border-zinc-700 hover:bg-zinc-800 inset-ring-2 inset-ring-zinc-800/90 hover:inset-ring-zinc-800/30 text-md cursor-pointer"
                onTap={() => assign(val)}
              >
                {val.name}
              </motion.button>
            );
          }
        })}
    </motion.div>
  );
};

export default SectionSelector;
