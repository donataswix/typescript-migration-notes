# Migration to TypeScript

## Pains

### Source Maps

Jest does not support source-maps, TypeScript does not retain lines. Using
`ts-jest` or our own solution does not hit Jest's file cache and everything
slows to a crawl.

### Mixing TS and JS

Mixing TS and JS React components does not work as (I) expected. See
`import-component/` example.

### Redux

Redux requires a lot of boilerplate (switch statement + types) to make it type
safe.

(Useful tricks: https://github.com/piotrwitek/react-redux-typescript-patterns)
