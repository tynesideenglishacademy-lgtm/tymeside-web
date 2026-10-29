import test from 'node:test';
import assert from 'node:assert/strict';
import { enquiryContext, selectedInterest, serviceContactUrl, SERVICE_INTEREST } from '../src/lib/enquiryContext.ts';

test('service enquiries retain origin and campaign without forwarding unrelated query data', () => {
  for (const slug of Object.keys(SERVICE_INTEREST) as Array<keyof typeof SERVICE_INTEREST>) {
    const url = new URL(serviceContactUrl(slug, '?utm_source=instagram&utm_medium=social&utm_campaign=autumn&email=private@example.com'), 'https://example.test');
    assert.equal(url.hash, '#contact');
    assert.equal(selectedInterest(url.search), SERVICE_INTEREST[slug]);
    assert.equal(enquiryContext(url.search).landing, `/${slug}`);
    assert.ok(enquiryContext(url.search).notes.includes('utm_source: instagram'));
    assert.equal(url.searchParams.has('email'), false);
  }
});

test('unrecognised interest and landing cannot become arbitrary form or event values', () => {
  assert.equal(selectedInterest('?interest=untrusted'), '');
  assert.equal(enquiryContext('?landing=https://evil.test/?email=private@example.com').landing, '/');
  assert.equal(enquiryContext('', '/empresas').landing, '/empresas');
  assert.ok(enquiryContext(`?utm_campaign=${'x'.repeat(1000)}`).notes.at(-1)!.length < 100);
});
