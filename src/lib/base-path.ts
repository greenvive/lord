// Single source of truth for the GitHub Pages sub-path deployment.
// next.config.ts imports this so the Next.js router basePath stays in sync.
// next/image does not automatically prefix `src` with basePath when
// `images.unoptimized` is true (static export), so callers must prefix
// public-folder asset paths manually using `withBasePath()`.
//
// The repo is deployed as a GitHub Pages *project* page at /lord, but that
// prefix must only apply to the CI build that actually publishes there.
// GITHUB_ACTIONS is set to "true" automatically by GitHub Actions runners
// (see .github/workflows/deploy.yml) and is absent for local `next dev` /
// `next build`, so locally the app serves at the plain root ("/") instead
// of requiring "http://localhost:3000/lord/".
export const basePath = process.env.GITHUB_ACTIONS === "true" ? "/lord" : "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
