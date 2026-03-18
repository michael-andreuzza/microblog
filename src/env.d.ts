/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@lexingtonthemes/seo" {
  import type { AstroComponentFactory } from "astro/runtime/server/index.js";
  export const AstroSeo: AstroComponentFactory;
}
