import { RiReactjsLine } from "react-icons/ri";
import {
  SiJavascript,
  SiRemix,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariants = (duration: number) => ({
  inital: { y: -10 },
  animate: {
    y: [20, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine
            variants={iconVariants(6)}
            initial="inital"
            animate="animate"
            className="text-7xl text-cyan-400"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRemix className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-orange-400" />
        </motion.div>
      </div>
    </div>
  );
};
