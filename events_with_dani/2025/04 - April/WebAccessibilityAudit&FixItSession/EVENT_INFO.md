# Web Accessibility Audit & Fix-It Session

## 📢 Event Overview

Thank you for joining the **Web Accessibility Audit & Fix-It Session!** 🌍  
This hands-on event guided developers and designers through the process of identifying and fixing common accessibility issues on websites. The session was designed for all experience levels and focused on building more inclusive web experiences.

## 🧠 Key Takeaways

- We explored what web accessibility means and why it matters
- We learned how to run an audit using free, beginner-friendly tools
- We identified and fixed common accessibility problems like missing alt text, low color contrast, and lack of keyboard support
- We practiced testing with screen readers and keyboard-only navigation
- We encouraged an accessibility-first mindset for all future projects

## 🧑‍🏫 Highlight: Required Fields & Screen Readers

We also covered how to make required form fields accessible:

1. Use the `required` attribute on form elements
2. Add visible indicators like asterisks (`*`) using `aria-hidden="true"`
3. Use `aria-required="true"` for extra screen reader support
4. Provide clear labels and link them properly with `for` and `id`
5. Display accessible error messages using `role="alert"` and `aria-describedby`

Example:

```html
<label for="email">Email <span aria-hidden="true">*</span></label>
<input id="email" type="email" required aria-required="true" aria-describedby="emailError">
<div id="emailError" role="alert">Email is required.</div>
```

## 📺 Resources

You can revisit the slides, recording, and reference links here: [Google Drive Link](https://drive.google.com/drive/folders/1vPE48kK6Db_V-cL1WtjxZTnFjoQqzPzE?usp=drive_link)

Happy Coding! 🚀
