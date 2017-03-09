Type of `action` parameter for both `reducers.a1` and `reducers.a2` is inferred
as `any` in TypeScript. Flow does slightly better by inferring union type
`{|decrementBy: number, type: 'a2'|} | {|incrementBy: number, type: 'a1'|}`.

Could this be made to narrow type down to single type, like with `switch`
statement?
