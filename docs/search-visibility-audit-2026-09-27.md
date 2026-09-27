# Nirankush: Google and AI search audit — 27 September 2026

## Observed baseline

Checked Google directly in a signed-out browser with an India/English interface, query `nirankush`. This is one live observation, not a universal rank or Search Console average position.

Standard web-result order observed, excluding AI Overview, People Also Ask and video modules:
1. Instagram @nirankush
2. IMDb, Nirankush (2013)
3. Facebook @niraankush
4. https://www.nirankush.com/

The website result title was “Nirankush | Ankush Patil”; its snippet described a Systems Architect / Technical Lead. The live website already served the author homepage. This discrepancy suggests an older indexed version or older source signals; Search Console's last crawl and indexed HTML are needed to confirm the cause.

Google AI Overview led with the dictionary meaning of Nirankush. AI Mode listed the dictionary meaning first, the Marathi poet Ankush Patil second, and the film third. The author section cited Instagram and Facebook; it did not cite nirankush.com in the visible response. It recognized the person, but did not mention Sahyajinashi there.

## Verified technical baseline

- HTTPS www homepage: 200, author content available in initial HTML.
- HTTPS apex domain: 308 to https://www.nirankush.com/.
- Robots allows Googlebot, Bingbot and named AI search crawlers.
- Sitemap includes 12 public pages.
- Canonical tags already point to production www URLs.
- Khand fonts are self-hosted; HTTPS response has HSTS.
- Direct `/authority-static/.../index.html` URLs also returned 200, exposing duplicates.
- Author structured data existed, but the main biography was only marked as Person; book IDs differed across pages.

## Changes in this revision

- Added a visible English author identification to the Marathi homepage: Nirankush (Ankush Patil), Marathi poet and author of Sahyajinashi.
- Updated homepage description and author-profile link text.
- Marked the main biography as ProfilePage with the author as mainEntity.
- Unified author and book IDs across static page structured data; linked book authors and article authors to the same person.
- Normalized WebSite naming and added clickable official profiles plus an official-website answer on the author page.
- Removed technical-architect positioning from primary author metadata, manifest and the introduction of the existing llms.txt. Preserved unrelated portfolio content and factual technical-role details.
- Added permanent redirects from the 12 static implementation URLs to their public URLs.
- Allowed unrestricted text/video snippets and large image previews on public pages.
- Updated sitemap modification date after actual page changes.

`public/authority-static` is the currently served production content via Next.js rewrites. The corresponding Next.js author metadata was aligned as well. The separate old Sites copy is not deployed by this repository.

## Search Console: next required actions

Search Console was signed out. The user identified er.ankush.patil@gmail.com as the account to use; Google requested sign-in completion. No indexing requests have been submitted by this audit unless a subsequent update records them.

Once signed in:
1. Select the nirankush.com property; verify ownership if not already verified.
2. Inspect https://www.nirankush.com/, /nirankush and /sahyajinashi. Compare user-declared and Google-selected canonicals, last crawl and indexed HTML.
3. Test the live URLs after deployment; request indexing of these three priority pages.
4. Submit https://www.nirankush.com/sitemap.xml and inspect its processing status.
5. Check Page indexing exclusions and Performance queries. Track `nirankush`, `nirankush author`, `nirankush poet`, `अंकुश पाटील`, `निरांकुश` and `sahyajinashi` separately.

## Off-site priorities over the next month

Use a consistent short identity wherever editable: “Nirankush (Ankush Patil) — Marathi poet and author of Sahyajinashi.” Link to https://www.nirankush.com/ from official Instagram, Facebook, YouTube and LinkedIn profiles. Check existing links before editing; these profiles were not changed in this revision.

Seek genuine corroboration: ask the publisher to link the author page and verify ISBN/author data on book listings; ask podcast/event hosts to credit the author and link his biography in existing episode/event descriptions. These are outreach recommendations, not messages already sent. Avoid bought links, fabricated coverage and duplicate keyword articles.

Keep the author page as the central biography, the book page as the central book reference, and publish original poems, writing context and interviews with clear authorship. A higher volume of near-identical biographies is not the priority.

Review Search Console weekly over 4–8 weeks. Record query impressions, clicks, average position and book/WhatsApp conversions; a ranking gain without relevant visits or enquiries is incomplete progress. No recurring automation was created.

## Expectations and references

A common dictionary word and film title compete for the one-word query. First establish reliable recognition for author-intent searches, then grow the author's association with the broader name. Neither first position nor an AI answer's order can be set through website code. Existing llms.txt is an informational file, not a Google AI ranking requirement.

Google says AI Overviews and AI Mode use the same SEO fundamentals and require indexed, snippet-eligible pages. Special AI files or AI-specific schema are not required:
https://developers.google.com/search/docs/appearance/ai-features

ProfilePage guidance:
https://developers.google.com/search/docs/appearance/structured-data/profile-page

Canonicalization guidance:
https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

## Validation

Production Next.js build passed. `scripts/check-author-seo.mjs` checks all 12 public responses, exact served content, canonical tags, one H1 per page, parseable JSON-LD, profile/book identity links, 308 redirects for duplicate URLs, robots and sitemap. Local HTTP checks passed. The homepage was also inspected in-browser for typography and visible author identification. Deployment verification is recorded separately when performed.
