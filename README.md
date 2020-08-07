# Sentry Super Error example

## Resources

1. [Sentry](https://sentry.io/organizations/dennis-okeeffe/issues/)
2. [Sentry - Capturing Events](https://docs.sentry.io/error-reporting/capturing/)
3. [Sentry - Breadcrumbs](https://docs.sentry.io/enriching-error-data/breadcrumbs/)
4. [Super and Extends in JavaScript - Medium](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)

## Error thrown

```s
> node index.js
SentryError
data required
SentryError: data required
    at main (/Users/dennis.okeeffe/Project-Imposter/blog-repos/custom-error/index.js:12:13)
    at Object.<anonymous> (/Users/dennis.okeeffe/Project-Imposter/blog-repos/custom-error/index.js:22:1)
    at Module._compile (internal/modules/cjs/loader.js:1158:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
    at Module.load (internal/modules/cjs/loader.js:1002:32)
    at Function.Module._load (internal/modules/cjs/loader.js:901:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
```
