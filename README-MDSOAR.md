# MD-SOAR Angular UI

Customized front end for MD-SOAR (<https://github.com/umd-lib/mdsoar/>).

## Documentation

The original dspace-angular documentation is in the "README.md" file.

## Prerequisite

* Node v18.x or v20.x
* npm >= v10.x
* yarn == v1.x
* Ensure that the MD-SOAR API is up and running by following the instructions at
  <https://github.com/umd-lib/mdsoar/tree/mdsoar-main>

## About this GitHub Repository

This repository is a mirror clone (not a fork) of the "DSpace/dspace-angular"
GitHub repository (<https://github.com/dspace/dspace-angular>). The
"DSpace/dspace-angular" repository was not forked, because the
"umd-lib/dspace-angular" repository (<https://github.com/umd-lib/dspace-angular>)
used for DRUM is already a fork of the "DSpace/dspace-angular" repository, and,
unlike organizational GitHub accounts, individual developer GitHub account
cannot contain two forked repositories that both share the same upstream
repository.

## Development Setup

This repository uses the "GitHub Flow" branching model, with "mdsoar-main" as the
main branch for MD-SOAR development.

1) Clone the Git repository and switch to the directory:

    ```zsh
    $ git clone -b mdsoar-main git@github.com:umd-lib/mdsoar-angular.git mdsoar-ui
    $ cd mdsoar-ui
    ```

2) Create the dev config file

    ```zsh
    $ cat <<EOF > config/config.dev.yml
    # Angular Universal server settings
    # NOTE: these must be 'synced' with the 'dspace.ui.url' setting in your backend's local.cfg.
    ui:
      ssl: false
      host: localhost
      port: 4000
      nameSpace: /

    # The REST API server settings
    # NOTE: these must be 'synced' with the 'dspace.server.url' setting in your backend's local.cfg.
    rest:
      ssl: false
      host: localhost
      port: 8080
      nameSpace: /server

    # UMD Environment Banner settings
    environmentBanner:
      text: Local Development
      foregroundColor: "#fff"
      backgroundColor: "#008000"
      enabled: true
    EOF
    ```

3) Install the dependencies

    ```zsh
    # install the local dependencies
    $ yarn install
    ```

4) Start the server in development mode

    ```zsh
    $ yarn run start:dev
    ```

    This will start the angular application in development mode which will
    watch for changes, rebuild the code, and reload the server for you.

    Then go to <http://localhost:4000> in your browser

## Production Docker image

The Docker image used for running MD-SOAR in Kubernetes is created using the
"Dockerfile.prod" file.

This Docker image runs Angular using Node, relying on Kubernetes to provide
additional replicas if horizontal scaling is needed.

## Customizations

### Environment Banner

In keeping with [SSDR policy](https://confluence.umd.edu/display/LIB/Create+Environment+Banners),
an "environment banner" will be displayed at the top of each page when running
on non-production servers.

The environment banner can be configured either via a config/config.*.yml" YAML
file or by environment variables. In both are present, the environment variables
take precedence.

#### YAML file

The following is an example of configuring in a "config/config.*.yml" YAML file,
such as "config/config.dev.yml":

```yaml
# UMD Environment Banner settings
environmentBanner:
  text: Local Development
  foregroundColor: "#fff"
  backgroundColor: "#008000"
  enabled: true
```

#### Environment variables

In DSpace, the configuration from the YAML files can be overridden using either
environment variables, or a ".env" file (see the "Configuration Override"
section in <https://wiki.lyrasis.org/display/DSDOC7x/User+Interface+Configuration>.

The following environment variables can be used:

* DSPACE_ENVIRONMENTBANNER_TEXT - the text to display in the banner
* DSPACE_ENVIRONMENTBANNER_FOREGROUNDCOLOR - the foreground color for the
  banner, as a CSS color
* DSPACE_ENVIRONMENTBANNER_BACKGROUNDCOLOR - the background color for the
  banner, as a CSS color
* DSPACE_ENVIRONMENTBANNER_ENABLED - "true" (case-sensitive) enables the
  banner. Anything else (including not being provided, or blank) disables the
  banner.

For example, in a ".env" file:

```text
DSPACE_ENVIRONMENTBANNER_TEXT=Test Environment
DSPACE_ENVIRONMENTBANNER_FOREGROUNDCOLOR=#000
DSPACE_ENVIRONMENTBANNER_BACKGROUNDCOLOR=#fff100
DSPACE_ENVIRONMENTBANNER_ENABLED=true
```

### Community Themes

The DSpace communities associated with individual institutions may have a
custom DSpace theme. See [docs/CommunityThemes.md](docs/CommunityThemes.md)
for more information.

### Angular Customizations

Specific customizations made to the stock DSpace Angular codebase (outside of
normal DSpace customizations) are recorded in
[docs/MdsoarAngularCustomizations.md](docs/MdsoarAngularCustomizations.md).

### I18n Customizations

All changes to I18n assets should be made in the "UMD Customization" section
at the bottom of the default "src/assets/i18n/en.json5" file.

Existing DSpace-provided entries are overridden when added to the
"UMD Customization" section, because when multiple keys occur in the file,
the last instance of the key is used.

## Customization Markings

UMD customizations to stock DSpace code should be marked, if possible, with
a starting comment "UMD Customization" and an ending comment of
"End UMD Customization", for example, in a JavaScript file:

```javascript
// UMD Customization
... New or modified code ...
// End UMD Customization
```

The following customizations *do not* need to be commented:

* Files that at wholly written by UMD, for which there is no corresponding
  stock DSpace file.

The main goal is to make it immediately when performing DSpace version upgrades
whether a change in a file is due to an explicit UMD customization.

## Debugging using VS Code

The built-in VS Code debugger can be used in conjunction with the Chrome web
browser to debug the application. To use the debugger:

1) Add the "mdsoar-ui" folder to VS Code.

2) Add a breakpoint in a TypeScript file.

3) In the "Run and Debug" sidebar tab, select "Launch Chrome against localhost"
   in the "RUN AND DEBUG" dropdown. Then left-click the green "play" icon, to
   the left of the dropdown. An instance of the Chrome browser will launch and
   display the application home page.

4) Perform whatever actions are necessary to trigger the breakpoint. The
   VS Code window will be displayed with the breakpoint activated.

**Note:** Breakpoints can also be selected after Chrome has been launched.
Due to lazy module loading in Angular, a breakpoint may not be immediately
"bound", if the relevant code has not been loaded. The breakpoint should
bind automatically when the code is loaded.

In the launch configuration, the line:

```json
"browserLaunchLocation": "ui"
```

is needed to prevent Chrome from displaying a "Restore" session dialog every
time Chrome starts. See <https://github.com/microsoft/vscode-js-debug/issues/723#issuecomment-866227122>

## Running the Tests

To run the TypeScript unit tests:

```zsh
$ yarn test
```

## TypeScript Linter

To run the TypeScript Linter (from the "Run lint" step in
".github/workflows/build.yml"):

```zsh
$ yarn run lint:nobuild --quiet
```
