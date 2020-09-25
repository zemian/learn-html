## ExpressJS

Explore and learn about https://expressjs.com

```
npm install
node hello.js
```

## The `serve-index` module can messup route!

If you not careful, the `serve-index` can over mask the route path
and you will see URL method not defined! The solution is to bind `serve-index`
to specific path and avoid crash with route paths.

