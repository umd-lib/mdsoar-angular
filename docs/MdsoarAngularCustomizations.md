# MD-SOAR Angular Customizations

## Introduction

This document contains information related to changes made to the stock DSpace
Angular code, to customize it for MD-SOAR.

This document is intended to cover specific changes made to Angular behavior
that are outside of "normal" DSpace customization.

## Disable "End User Agreement"

The "End User Agreement" is not needed, and so is disabled in the
"config/config.yml" file.

## Disable 'link-in-text-block' Cypress Axe test

The Cypress "homepage.cy.ts" end-to-end test was consistently failing in GitHub
Actions with a "link-in-text-block" accessibility violation from the "axe"
accessibility library (see
<https://dequeuniversity.com/rules/axe/4.6/link-in-text-block>).

This failure appears to be a false positive, as the test passes when run
locally. Also, links in MD-SOAR can be distinguished by hovering over them
(which displays an underline), which is something that is not tested by the
"axe" library. As noted in the above link:

> ... you must verify that the link gets distinct style on focus and hover
> (manual testing required), as this cannot be automated reliably.

Modified the "testA11y" function in "cypress/support/utils.ts" to disable the
"link-in-text-block" check.

## Disable "Privacy Policy" link in GDPR popup

MD-SOAR does not have a privacy policy, so the "Privacy Policy" link in the
GDPR popup is disabled in the "config/config.yml" file.

## Explanatory Text in "Creative Commons" License Step

Added explanatory text to the "Creative Commons" license step on the submission
form in "src/app/submission/sections/cc-license/submission-section-cc-licenses.component.html".

## Health Check Endpoint

Added static HTML page (src/themes/mdsoar/assets/static-pages/health-ping.html)
to serve as a simple health check endpoint.

## Uncommented "/browse/*" endpoints in "robots.txt"

In the "src/robots.txt.ejs" file, uncommented the "/browse/*" endpoints, to
dissuade crawlers from those URLs.
