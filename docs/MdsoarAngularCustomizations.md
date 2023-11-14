# MD-SOAR Angular Customizations

## Introduction

This document contains information related to changes made to the stock DSpace
Angular code, to customize it for MD-SOAR.

This document is intended to cover specific changes made to Angular behavior
that are outside of "normal" DSpace customization.

## Angular routing for "handle" redirects

On the home page, the hyperlinks to the individual institutional communities in
the “Institutions in MD-SOAR” list use the “handle” URLs for the institutions
(i.e., <http://localhost:4000/handle/11603/1> for Frostburg), instead of the
“UUID” URLs (i.e.,
<http://localhost:4000/communities/e34f5843-e595-4050-9f20-3c730277abf8>
for Frostburg).

DSpace properly redirects a “handle” URL to a “UUID” URL, but when using the
“Back” button in the browser, the user is not returned to the original page.

Modified the “findByIdAndIDType” method in the
“src/app/core/data/dso-redirect.service.ts” class, so that the `router.navigate`
uses the `replaceUrl` option from `NavigationExtras` to skip the handle-to-UUID
redirect in the browser history, and enable the browser "Back" button to
return the user to the original page.

Also update tests in "src/app/core/data/dso-redirect.service.spec.ts"

## Disable "End User Agreement"

The "End User Agreement" is not needed, and so is disabled in the
"config/config.yml" file.

## Disable "Privacy Policy" link in GDPR popup

MD-SOAR does not have a privacy policy, so the "Privacy Policy" link in the
GDPR popup is disabled in the "config/config.yml" file.

## Explanatory Text in "Creative Commons" License Step

Added explanatory text to the "Creative Commons" license step on the submission
form in "src/app/submission/sections/cc-license/submission-section-cc-licenses.component.html".

## Health Check Endpoint

Added static HTML page (src/themes/mdsoar/assets/static-pages/health-ping.html)
to serve as a simple health check endpoint.
