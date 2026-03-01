# Status: Procad-inspired Hero + Portfolio Plan

## Current Status
- **State**: In progress
- **Focus**: Add Procad-like presentation hero to homepage and keep hybrid roadmap (Home + dedicated Projects)
- **Priority**: P1 for homepage visual upgrade, P1 for Full Projects Listing

## Finalized Inspirations to Implement
1. **Blackbox**
   - Minimal editorial layout with strong typography and whitespace.
   - Featured project cards with metadata-first storytelling.
2. **Procad**
   - Hero with presentation progression (`Sketch` -> `Render` -> `Reality`).
   - Clear featured work rhythm with strong section hierarchy.
3. **ANJ**
   - Practical project metadata and description style.
   - Business-first presentation of services and outcomes.

## Phase-by-Phase Implementation Plan

### Phase 1: Foundation + Hero (Now)
- [x] Add Procad-style hero section in `HomeComponent`.
- [x] Add `Sketch / Render / Reality` mode toggle and progress indicator.
- [x] Extend data model for presentation modes.
- [x] Add data entries and local hero assets for all 3 modes.
- [ ] Validate responsive behavior and accessibility polish.

**Phase 1 Completed Work (delta):**
- Header refactor: `header.component.html`, `header.component.scss`, `header.component.ts` rewritten to standalone component pattern, OnPush, and Signals.
- Responsive header with mobile hamburger menu, overlay navigation, Connect CTA added to desktop & mobile.
- Mobile overlay includes an accessible close control using an inline golden SVG (`ui-cross.svg`) and keyboard/focus styles.
- Logo visual improvements and layout adjustments for better contrast and scale.
- Refactored `presentation-toggle`, `home`, and `footer` components to external templates/styles earlier in the workflow.
- Build pipeline verified; increased the `anyComponentStyle` budget in `angular.json` to avoid style-size warnings.


**Files touched in this phase**
- `src/app/features/home/home.component.ts`
- `src/app/models/portfolio.model.ts`
- `src/app/core/services/portfolio.service.ts`
- `public/assets/data/portfolio-data.json`
- `public/assets/hero/sketch.svg`
- `public/assets/hero/render.svg`
- `public/assets/hero/reality.svg`

### Phase 2: Full Projects Listing (Next)
- [ ] Create dedicated `/projects` route.
- [ ] Build projects listing with metadata-first cards.
- [ ] Add category grouping and visual consistency with homepage.
- [ ] Add project detail page scaffold.

**Phase 2 Planned Work (next immediate tasks):**
- Create `/projects` route and scaffold `ProjectsListComponent` (standalone).
- Implement project filtering and tag-based category grouping.
- Ensure project cards follow the metadata-first layout used in the hero.

### Phase 3: Home Refinement
- [ ] Restructure featured projects section for stronger visual hierarchy.
- [ ] Add founders/about teaser block using existing data.
- [ ] Improve CTA and contact/footer rhythm.

**Phase 3 Refinements (follow-up):**
- Replace placeholder hero SVGs with final branded renders (when available).
- Tune hero responsiveness and ensure ARIA/keyboard accessibility for mode toggle.
- Polish spacing, typography scales, and image optimization.

### Phase 4: QA + Hardening
- [ ] Run build and resolve regressions.
- [ ] Verify keyboard navigation for hero mode controls.
- [ ] Ensure no visual breakpoints regressions (mobile/tablet/desktop).

**Phase 4 QA tasks (finalize):**
- Add unit tests for `PortfolioService` and `PresentationToggleComponent`.
- Run accessibility audits (Lighthouse) and fix issues.
- Add SEO meta tags per route and image lazy-loading.


## Acceptance Criteria
- Homepage hero displays large visual area and mode controls (`Sketch`, `Render`, `Reality`).
- Clicking each mode updates visual and caption.
- Hero remains responsive and does not break existing sections.
- Data-driven mode content can be changed in JSON without template rewrites.

## Notes
- Current hero visuals are local SVG placeholders designed for iteration speed.
- Replace with final branded renders/photos in `public/assets/hero/` once available.




## Header
Header Styles, Home, Studio[Aboutus, Work with us, Contact us, Footer], PortFolio[Projects], About us[Form].
 
1.  [x] navigation — responsive header with hamburger + overlay implemented

## footer

1. [] Social links section
2. [] logo which will redirect the user to the home page
3. [] Project Links and other Navigation Links.

**Footer Next Steps:**
- Complete footer content: ensure logo links to home, add project quick-links, and social follows.
- Add accessibility improvements and correct semantic structure.



