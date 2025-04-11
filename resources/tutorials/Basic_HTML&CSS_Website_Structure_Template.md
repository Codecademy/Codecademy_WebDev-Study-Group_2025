# Basic HTML & CSS Website Structure Template

This template will allow you to start with an outline, and fill in and edit the areas for your project.

## Project Setup

- Create a project folder (`website-name`)
- Inside the project folder, create:
    - `index.html`
    - `styles.css`
    - Additional folders (optional): `images`, `scripts`, etc.

 ## HTML Structure (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Website Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Header Section -->
  <header>
    <h1>Your Website Name</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main Content Section -->
  <main>
    <section>
      <h2>Section Title</h2>
      <p>This is where your main content goes.</p>
    </section>
  </main>

  <!-- Footer Section -->
  <footer>
    <p>&copy; 2025 Your Name or Website Name</p>
  </footer>

</body>
</html>
```

## CSS Structure

```css
/* General Styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

/* Header Styling */
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

header nav ul {
  list-style: none;
  padding: 0;
}

header nav ul li {
  display: inline;
  margin: 0 10p;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
}

/* Main Content Styling */
main {
  padding: 20px;
}

/* Footer Styling */
footer {
  background-color: #f4f4f4;
  text-align: center;
  padding: 10px;
  position: fixed;
  width: 100px;
  bottom: 0;
}
```

## Tips and Tricks for Creating a Website from Wireframes or Design Specs

- **Analyze First**: Spend time thoroughly reviewing your wireframe or design specifications to identify HTML elements and CSS styling needed.
- **Layout Planning**: Sketch out a basic HTML structure on paper or digitally before coding.
- **Use Semantic HTML**: Clearly structure your content with semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS Organization**: Group similar CSS styles and use comments for clarity and maintainability.
- **Responsive Design**: Start your CSS with a mobile-first approach, adding media queries to adjust your layout for larger screens.
- **Box Model Mastery**: Understand margins, padding, borders, and box-sizing to effectively manage spacing and layout.
- **Fonts and Colors**: Extract exact colors and font styles from your design specs, ensuring consistency throughout your website.
- **Inspect Tools**: Frequently use browser developer tools to debug and adjust your layout precisely.
- **Iterate**: Continuously test and refine your site across various devices and browsers to ensure compatibility and performance.

## Additional Resources

- Use [MDN Web Docs](https://developer.mozilla.org/en-US/) for further exploration.
- Validate your HTML and CSS using [W3C Validator](https://validator.w3.org).
- Expand the site with interactive Javascript when ready.
