# sii.crm.examples.ui.webresource

## NPM Auth

`vsts-npm-auth -C .npmrc -f`

## Package.json Scripts

- "start" - install and build project
- "build" - build project
- "build-ci" - build project in CI
- "build-watch" - enable webpack watch
- "eslint-check" - eslint check
- "eslint-fix" - eslint fix
- "publish" - install and webpack build
- "copy" - copy files (used in CI)

## Project structure

- src
  - export - output .ts file, each file here will be compile to js file in dist
    - [table_name] - name of table for script
      - [table_name].form.ts - script add on form
      - [table_name].ribbon.ts - script add on ribbon
  - shared - common scripts used in export
    - logic - common logic to share with diffrents tabels
      - [logic_name].logic.ts
    - metadata - TS metadata
      - [table_name].metadata.ts
    - repository - access to data
      - [table_name].reposiotory.ts

## Generated scripts

Output structure:

- sii_/ - main node
  - [table_name] - node for tables (without publisher)
    - [script_name] - script

Output example name in WebResource: sii_/conflict/conflictform.js
