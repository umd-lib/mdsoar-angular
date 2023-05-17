# MD-SOAR Angular UI

Customized front end for MD-SOAR (<https://github.com/umd-lib/mdsoar/>).

## Documentation

The original dspace-angular documentation is in the "README.md" file.

## Prerequisite

- Node v12.x, v14.x or v16.x
- npm >= v5.x
- yarn == v1.x
- Ensure that the MD-SOAR API is up and running by following the instructions at
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

### Branches

This repository uses the "GitHub Flow" model for branching, with the default
"mdsoar-main" branch serving as the trunk/mainline branch for receiving
updates from pull requests.

The "main" branch is reserved for tracking changes in the upstream
"DSpace/dspace-angular" repository, and should *not* be updated by pull
requests.

## Development Setup

1) Clone the Git repository and switch to the directory:

    ```bash
    $ git clone -b mdsoar-main git@github.com:umd-lib/mdsoar-angular.git mdsoar-ui
    $ cd mdsoar-ui
    ```

2) Create the dev config file

    ```bash
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
    EOF
    ```

3) Install the dependencies

    ```bash
    # install the local dependencies
    $ yarn install
    ```

4) Start the server in development mode

    ```bash
    $ yarn run start:dev
    ```

    This will start the angular application in development mode which will
    watch for changes, rebuild the code, and reload the server for you.

    Then go to <http://localhost:4000> in your browser

## Customizations

### I18n Customizations

All changes to I18n assets should be made in the "UMD Customization" section
at the bottom of the default "src/assets/i18n/en.json5" file.

Existing DSpace-provided entries are overridden when added to the
"UMD Customization" section, because when multiple keys occur in the file,
the last instance of the key is used.

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
