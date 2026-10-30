# Midterm

**Name:** Sulman Tariq
**Roll number:** FA24-BCS-154
**N** = 54 | **BP** = 654px | **H** = 18 | **K** = 3

## Files changed
- index.html, product.html, style.css
- script.js (new)

## Task 1: CSS-only category filter
Added 3 categories (audio, wear, shoes) as classes on each card and 4 radio buttons
(All + 3). `:checked ~ #grid .col:not(.category)` hides non-matching cards with
display:none, so there are no gaps. The checked label uses hsl(18, 70%, 45%).

## Task 2: Product page grid and sticky box
Used CSS Grid with grid-template-areas. One column below 654px (image, details,
description). From 654px: image and details side by side, description below.
Details box is sticky at top: 84px (54 mod 40 + 70).

## Task 3: Search, sort, Premium
script.js reads each card's name and price from the DOM. Search toggles a no-match
class, so it works with the CSS filter. Sort moves cards using appendChild and
alternates. Cards over 5400 get a Premium badge.

## AI tools used
Claude