Running `npm run build` TypeScript complains with this message:
```
index.tsx(9,10): error TS2604: JSX element type 'Hello' does not have any construct or call signatures.
```
TypeScript is able infer that World is React component, but fails on Hello.
