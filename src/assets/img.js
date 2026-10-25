export const img = (name) =>
  new URL(`./image/${name}`, import.meta.url).href;