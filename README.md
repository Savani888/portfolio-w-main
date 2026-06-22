# Savani Bhimellu AI Portfolio

A React and Vite portfolio site for showcasing AI agents, RAG systems, backend AI engineering projects, skills, achievements, developer activity, and contact details.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI components
- Framer Motion
- TanStack Query
- pnpm workspaces

## Project Structure

```text
artifacts/portfolio      Portfolio web app
lib/api-client-react     Generated React API client
lib/api-spec             API specification package
lib/api-zod              Shared Zod schemas
lib/db                   Database package
scripts                  Workspace scripts
```

## Requirements

- Node.js
- pnpm

This workspace is configured to use pnpm. The root `preinstall` script blocks npm and yarn installs.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the portfolio locally:

```bash
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/portfolio run dev
```

On Windows PowerShell:

```powershell
$env:PORT='4173'; $env:BASE_PATH='/'; pnpm --filter @workspace/portfolio run dev
```

Open:

```text
http://localhost:4173/
```

## Build

Build the full workspace:

```bash
pnpm run build
```

Build only the portfolio app:

```bash
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/portfolio run build
```

On Windows PowerShell:

```powershell
$env:PORT='4173'; $env:BASE_PATH='/'; pnpm --filter @workspace/portfolio run build
```

The production output is generated at:

```text
artifacts/portfolio/dist/public
```

## Preview Production Build

```bash
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/portfolio run serve
```

On Windows PowerShell:

```powershell
$env:PORT='4173'; $env:BASE_PATH='/'; pnpm --filter @workspace/portfolio run serve
```

## Deployment

Deploy the contents of:

```text
artifacts/portfolio/dist/public
```

For platforms such as Vercel, Netlify, or static hosting, use:

- Build command: `PORT=4173 BASE_PATH=/ pnpm --filter @workspace/portfolio run build`
- Publish directory: `artifacts/portfolio/dist/public`

If deploying under a subpath, set `BASE_PATH` to that subpath during the build.
