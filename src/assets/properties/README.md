# Swapping in real property photography

The homepage and About page "old & new buildings" galleries currently render stylized
SVG illustrations (see `src/components/PropertyCard.jsx`) instead of real photos,
since no licensed photography of the reference addresses was provided.

To use real photos:

1. Drop image files into this folder (e.g. `new-1.jpg`, `classic-1.jpg`), ideally
   1200×900px or larger, landscape.
2. In `src/data/properties.js`, add a `photo: '/src/assets/properties/new-1.jpg'`
   field to the relevant entry.
3. `PropertyCard` automatically uses the real photo (and drops the "Illustrative"
   badge) once `photo` is present.

Reference addresses currently used (from the client brief):

**New developments:** 11 Hoyt Street (Brooklyn), 24 Ocean Condominiums (Brooklyn),
2100 Bedford Avenue (Brooklyn), 428 East 9th Street (New York)

**Established buildings:** 1655 Flatbush Avenue (Brooklyn), 2220 Burnett Street
(Brooklyn), 35-15 78th Street (Queens)

Only use photos Altmax has the rights to publish (owned photography, board/owner
permission, or licensed stock) — not photos scraped from listing sites.
