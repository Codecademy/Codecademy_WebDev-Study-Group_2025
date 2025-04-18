# Solutions to the Bug Sets

## 🧪 Set 1: Basic DOM & CSS Bugs

### 🧠 The Problem

When you click the button, nothing happens. Plus, the button styling looks… off.

### ✅ Step-by-Step Fixes

#### 1. JavaScript (`bugs.js`)

❌ Bug:
`document.addEventListener('DOMContentLoad', ...)`
🔍 `'DOMContentLoad'` is a typo. The correct event is `'DOMContentLoaded'`.

❌ Bug:
`document.getElementByID('bugBtn')`
🔍 JavaScript is case-sensitive. The correct method is `getElementById`.

❌ Bug:
`btn.addEventListen('click', ...)`
🔍 This is another typo. It should be `addEventListener`.

✅ Fix:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('bugBtn');
  btn.addEventListener('click', function() {
    document.querySelector('#output').innerText = "You squashed a bug!";
  });
});
```

#### 2. CSS (`bugs.css`)

❌ Bug:
Missing semicolons after `background-color: blue` and `cursor: pointer`.

✅ Fix:

```css
button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}
```

## 🧪 Set 2: Counter Logic & Styling

### 🧠 The Problem...Again

Clicking the button does nothing. Also, the button doesn't look quite right.

### ✅ Step-by-Step Fixes Part 2

#### 1. JavaScript (`app.js`)

❌ Bug:
`document.getElementsById(...)`
🔍 That method doesn’t exist. It should be `getElementById`.

❌ Bug:
`button.innerHtml = ...`
🔍 It’s case-sensitive. Should be `innerHTML`.

✅ Fix:

```javascript
let count = 0;
const button = document.getElementById("countBtn");
button.addEventListener('click', () => {
  count += 1;
  button.innerHTML = `Clicked ${count} times`;
});
```

### 2. CSS (`style.css`)

❌ Bug:
Missing semicolons after `color: white` and `border: 1px solid black`.

✅ Fix:

```css
#countBtn {
  display: block;
  margin: auto;
  padding: 12px 24px;
  background: green;
  color: white;
  border: 1px solid black;
}
```

## 🧪 Set 3: HTML + CSS Positioning + JS Typos

### 🧠 The Problem...One More Time

The secret message doesn’t appear on hover. The page throws a script error. Alert shows, but the message never changes.

### ✅ Step-by-Step Fixes Part 3

#### 1. HTML (`index.html`)

❌ Bug:
`<script src="script.js">` is missing its closing tag.

✅ Fix:

```html
<script src="script.js"></script>
```

#### 2. CSS (`main.css`)

❌ Bug:
`position: abolute;`
🔍 Typo: should be `absolute`.

✅ Fix:

```css
#secret-msg {
  opacity: 0;
  transition: 0.3s;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

#### 3. JavaScript (`script.js`)

❌ Bug:
`innertext` should be `innerText` (case-sensitive).

✅ Fix:

```javascript
document.querySelector('.box').addEventListener('mouseover', function() {
  console.log("Hovering!");
  alert("Keep looking...");
});

document.querySelector('#secret-msg').innerText = "🎯 You're close!";
```
