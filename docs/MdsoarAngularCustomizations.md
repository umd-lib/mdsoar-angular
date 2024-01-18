# MD-SOAR Angular Customizations

## Introduction

This document contains information related to changes made to the stock DSpace
Angular code, to customize it for MD-SOAR.

This document is intended to cover specific changes made to Angular behavior
that are outside of "normal" DSpace customization.

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
