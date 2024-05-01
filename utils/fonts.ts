import { Open_Sans } from "next/font/google";

const open_sans_init = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const open_sans = open_sans_init.className;
