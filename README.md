# PREVEST App

Canonical repository for the main PREVEST WeWeb coded component.

## Role in PREVEST

This repository owns the main application component used in the PREVEST WeWeb frontend.

Main responsibilities:

- PREVEST application UI implemented as a WeWeb coded component
- component source code and configuration
- WeWeb build output
- component-specific tests

## Main structure

- `src/` — component source code
- `scripts/` — component tests and utilities
- `dist/` — generated WeWeb build used for deployment/import
- `ww-config.js` — WeWeb component configuration

## PREVEST architecture

This repository is the canonical source for the main PREVEST WeWeb application component.

It is separate from:

- `prevest-os` — PREVEST Core/backend and product infrastructure
- `prevest-account` — authenticated account application and account services
- `prevest-results-experience` — results experience component
- `prevest-smart-match-assistant` — SMA / IRIS qualification component
- `prevest-agentic-os` — n8n/OpenClaw agentic infrastructure

Do not maintain duplicate copies of this component inside another PREVEST repository.

## Development

Build:

`npm run build`

Test:

`npm test`
