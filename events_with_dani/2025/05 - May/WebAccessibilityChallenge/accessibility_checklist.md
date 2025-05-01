
# Accessibility Fix Checklist

## Navigation & Structure
- [ ] Use semantic HTML tags (`<main>`, `<header>`, `<nav>`, `<section>`, etc.)
- [ ] Add proper heading levels (e.g., only one `<h1>`, followed by `<h2>`, etc.)
- [ ] Ensure a logical heading structure for screen reader navigation

## Images
- [ ] Add descriptive `alt` attributes to all images

## Forms
- [ ] Use `<label>` elements associated with each form input
- [ ] Ensure `for` attributes in labels match input `id`s
- [ ] Use clear and descriptive button text (e.g., "Submit")

## Color & Contrast
- [ ] Ensure text color contrasts well with the background (4.5:1 minimum for normal text)
- [ ] Avoid using color alone to convey meaning

## Keyboard & ARIA
- [ ] Ensure all interactive elements can be accessed via keyboard
- [ ] Use ARIA roles only when necessary (e.g., `aria-label`, `aria-labelledby`)

## Bonus Improvements
- [ ] Add skip links for screen readers
- [ ] Make links descriptive (avoid "click here")
- [ ] Use responsive design principles for mobile accessibility
