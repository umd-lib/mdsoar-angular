# Community Themes

## Introduction

MD-SOAR provides customized themes for the DSpace communities associated with
each member institution.

## Adding a theme

Community themes should typically be named "mdsoar-\<institution>" where
\<institution> is the (possibly abbreviated) name of the institution.

### umd-lib/mdsoar-angular Changes

The following steps should be made in the "umd-lib/mdsoar-angular" repository
to set up the community theme.

In the following steps, a new "mdsoar-example" theme is being created by copying
the "mdsoar-frostburg" theme.

1) Copy one of the existing community theme directories, such as
  "mdsoar-frostburg".

    ```bash
    $ cp -R src/themes/mdsoar-frostburg/ src/themes/mdsoar-example/
    ```

2) Replace the `src/themes/mdsoar-example/assets/image/community_logo.png`
   file with the logo image for the institution.

3) Update the `src/themes/mdsoar-example/app/footer/footer.component.html` file
   with the information for the institution. When referring to the logo image,
   use `assets/mdsoar-example/images/community_logo.png`.

4) Update the `src/themes/mdsoar-example/app/breadcrumbs/breadcrumbs.component.ts`
   file, changing "mdsoar-frostburg" to "mdsoar-example".

5) Add the new theme to "projects/dspace-angular/architect/build/options/styles"
   section of the `angular.json` file:

    ```text
    {
    ...
    "projects": {
      "dspace-angular": {
      ...
        "architect": {
          "build": {
           ...
           "options": {
           ...
           "styles": [
             ...
             {
               "input": "src/themes/mdsoar/styles/theme.scss",
               "inject": false,
               "bundleName": "mdsoar-example-theme"
             },
             ...
    ```

6) Add the theme and the community handle to the "themes" section of the
   `config/config.yml`, where \"<COMMUNITY_THEME_HANDLE>" is the community
   handle:

    ```text
    themes:
      ...
      - name: 'mdsoar-example'
        extends: 'mdsoar'
        handle: '<COMMUNITY_THEME_HANDLE>'
    ```

### umd-lib/k8s-mdsoar Changes

These changes should be made in the "umd-lib/k8s-mdsoar" repository to set up
the community theme.

7) Add the theme and community handle to the `base/config/config.yml` as in Step
   6 above, where \"<COMMUNITY_HANDLE>" is the community handle:

    ```text
    themes:
      ...
      - name: 'mdsoar-example'
        extends: 'mdsoar'
        handle: '<COMMUNITY_HANDLE>'
    ```

## Community Theme Required Elements

When asked to create a new community theme, the following elements are required:

1) The handle of the MD-SOAR community to apply the theme to.

    Since handles are not predictable, this implies that the MD-SOAR community
    is created prior to the rollout of the community theme.

2) A logo image for the community. This file is typically a PNG file, with
   a filename of "community_logo.png". There is no standard height/width size,
   and the same logo is used for both the breadcrumb trail and the footer.

3) The text for the footer. This will typically include:

   * The institutional logo (the provided logo image)
   * The name of the institutional library
   * The physcial address of the library
   * The URL of the library website
   * A contact email
   * A contact telephone number

## About Community Themes

Each community theme contains the following components that can be customized
for the individual institution:

* breadcrumbs - Prepends the institution logo to the breadcrumb trail
* footer - Adds an institution-specific footer with contact information

The community themes leverage the stock DSpace theme customization functionality
(see <https://wiki.lyrasis.org/display/DSDOC7x/User+Interface+Customization>).

Each community theme derives from the global "mdsoar" theme (which in turn is
based on the stock "dspace" theme).
