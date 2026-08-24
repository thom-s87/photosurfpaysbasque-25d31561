// Uppercase .JPG photos (user-provided) — mirrored in vite.config.ts assetsInclude.
declare module "*.JPG" {
  const src: string;
  export default src;
}
