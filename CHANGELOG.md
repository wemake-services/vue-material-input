# Changelog

## Version 1.1.0

- *Bracking* Removed `pattern` property, removed custom `pattern` validation
- *Bracking* Now all files are build into `dist/`, not into `/`
- We now support `vee-validation` plugin
- We now use `vue-play` for the preview
- Several `css` bugs fixed (like, `[disable]` not showing right)
- Changed style language from `scss` from `sass`
- Added new functionality to display custom errors via `errorMessages` prop

## Version 1.0.6

- Fixes issue when it was impossible to set the `v-model` value from code
- Addss button which cleans the value in `dev/MaterialModel.vue`
- Changed how `npm run test` works

## Version 1.0.5

- Fixes the error when `v-model` was passed as `null` and no listener was attached
- Adds `autocomplete` property support
- Some changes in tests
- Adds new example to `dev/MaterialModel.vue`

## Version 1.0.4

- Initial semver release
