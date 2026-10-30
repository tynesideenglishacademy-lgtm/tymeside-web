# Digital presence fixes — 29 October 2026

## Implemented on the review branch

- Independent consent for Google Fonts, error monitoring and Google Maps, denied by default. All consent action buttons have equal visual treatment.
- Reopen preferences from every footer. Map permission enables only Maps. Withdrawing monitoring reloads to terminate running code; map and font withdrawal remove their elements. Existing refusals remain honoured; previous blanket acceptance is re-requested as separate choices. Storage-blocked browsers retain a choice for the current page.
- Removed Sentry session recording and performance tracing. Error monitoring remains optional, with default PII collection disabled. This is a technical reduction, not legal approval.
- ES/EN cookie instructions now describe the actual control. Existing draft notices and legal identity placeholders remain visible.
- Replaced the absolute 2024–2026 pass-rate statistic with Cambridge preparation wording pending verification. An existing source comment mentioned a failed candidate in 2024; verify cohort, levels, exam dates and actual numerator/denominator before restoring a statistic.
- Qualified FUNDAE wording on homepage and business landing, including metadata and FAQ. No unconditional zero-cost promise.
- Four service landings preserve selected service, originating landing and bounded utm_source/utm_medium/utm_campaign through contact navigation. Contact and business forms retain that context in existing CRM notes. Existing server source tags remain unchanged. Campaign values and arbitrary query strings are not sent as custom analytics properties.
- Contact course preselection is restricted to actual offered choices. Requests to submit-lead time out after 20 seconds without automatic retry.
- Added a build guard that checks source freshness, snapshot integrity and all 13 expected snapshot files. Regenerated snapshots. This detects stale committed snapshots; it does not prove what Google has indexed or compare a deployed page against Search Console.
- Preserved exact slogan spacing in text extracted from the hero.

## Verification

- Locked dependency installation: npm reported 0 vulnerabilities at install time.
- TypeScript compile; targeted enquiry-context tests; lint; production build.
- Local browser verification with synthetic public configuration and intercepted requests: desktop/mobile controls, independent map permission, persistence and withdrawal, ES/EN labels, legacy choices, blocked storage, all four service CTAs, form failure preserving fields and explicit retry showing success. No production enquiries created.
- Browser failure test intentionally returns a 503; its expected console error is not a production failure.
- Local UI screenshots and browser results are in ignored output/presence-qa/.
- Live HTTP checks: preferred https://www.tynesideacademy.com/ responds 200 without redirect; HTTP/www takes one hop; HTTPS/apex takes one hop; HTTP/apex takes two hops. robots.txt and sitemap.xml respond 200 without redirects. Single-run timings are not Core Web Vitals evidence. No redirect changes were justified by these checks.

## Still requires academy / adviser input

1. Exact legal owner name, NIF and fiscal address; applicable registration details.
2. Actual vendor configuration, processor agreements, transfers, retention periods and lawful bases, including recruitment and minors. Assess whether a DPO is required; do not assume appointment is mandatory.
3. Approved final ES/EN policies, including privacy controls and confirmation of whether any further service-specific adjustments are needed.
4. Candidate results for any published pass-rate statistic, and current permission to display affiliations/badges.
5. Actual FUNDAE administration arrangements and eligibility wording.
6. Search Console access/results for indexing and queries; production mobile field measurements or reproducible lab diagnostics.
7. A controlled staging enquiry through storage, authorised CRM visibility and staff follow-up. Browser request interception does not verify those downstream steps.

## Next business actions

Confirm the programmes and groups with available places. Prioritise complete Google Business Profile information, genuine review requests and useful existing landing pages. Begin with a weekly count of qualified enquiries, response time, assessments booked and enrolments. Defer new social-channel integration, posting-volume commitments and architecture migration until those needs are established.

## Release

Changes are prepared for review. No production deployment, legal sign-off, live lead writes, account integration, database migration or access-control changes are included. This document is an implementation record, not a compliance certificate.
