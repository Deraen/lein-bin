# Lein-bin

Npm binary wrapper for [Leiningen](https://leiningen.org/)

Will download proper Lein script based on system OS when used (lein or lein.bat for Windows).

Can be useful for example for JavaScript based projects where Lein is used for
some parts, and has to be used on CI system, like: [js-framework-benchmark](https://github.com/krausest/js-framework-benchmark).

## Use

```
npm install --save lein-bin
npm run lein version
```

## Lein version

By default `stable` release is used. You can also set `LEIN_VERSION` environment
variable to specify the version. If you use default version and Leiningen
is updated, you'll need to remove
`node_modules/lein-bin/vendor/stable/lein` to get the updated version.
