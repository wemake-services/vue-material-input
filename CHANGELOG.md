# Changelog

## Version 1.2.0

- *Breaking* Refactored how classes works. Now they are applied on the root el$
- *Breaking* Changed css-rules, old rules will not work.
- Now `input` events are subscribed in template
- Refactored how validation is handled
- Now `:errorMessages` can be a `String`
- Now `:disabled="true"` input has a dotted border
- Fixed README.md and package.json

Closes #30, closes #31, closes #32, closes #33, closes #35, closes #38

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
