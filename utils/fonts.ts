import localFont from "next/font/local";

const open_sans_init = localFont({
  src: "../fonts/OpenSans-VariableFont_wdth,wght.ttf",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

export const open_sans = open_sans_init.className;
