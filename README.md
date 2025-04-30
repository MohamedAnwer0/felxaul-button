# 🚀 Flexa UI - Button Component

**Flexa UI** is a lightweight, customizable, and highly flexible React component library focused on delivering beautiful UI elements powered by TailwindCSS and Framer Motion.

This package specifically provides a **Button** component that offers advanced styling options, motion animations, and seamless integration into any React project.

---

## ✨ Features

-   ⚡ Built with **React** and **TailwindCSS**.
-   🎨 Fully customizable with multiple **sizes**, **colors**, and **styles**.
-   👡 Built-in **click animations** using **Framer Motion**.
-   🛡️ Supports **disabled** states with proper styling.
-   🔥 Tree-shakable and lightweight.
-   📦 Easy to install and integrate into any project.

---

## ⚙️ Requirements

To use this package, ensure your project is using:

- **React** `^18.0.0` or higher  
- **TailwindCSS** `^4.1.4`

---

## 📥 Installation

Install via npm:

```bash
npm install @flexaui/button
```

or via yarn:

```bash
yarn add @flexaui/button
```

---

## 📦 Usage

First, make sure you import the generated CSS file along with the Button component:

```jsx
import Button from "@flexaui/button";
import "@flexaui/button/dist/style.css";
```

Then, you can use the `Button` component like this:

```jsx
<Button label="Click Me" onClick={() => alert("Button clicked!")} />
```

---

## 📚 Button Component API

| Prop               | Type                                            | Default      | Description                                             |
| ------------------ | ----------------------------------------------- | ------------ | ------------------------------------------------------- |
| `type`             | `"button"`, `"submit"`, `"reset"`               | `"button"`   | The button HTML type.                                   |
| `label`            | `string`                                        | `"Flexa UI"` | The text displayed inside the button.                   |
| `size`             | `"large"`, `"medium"`, `"small"`                | `"medium"`   | Controls the padding and text size of the button.       |
| `color`            | `string` (Tailwind color names)                 | `"blue"`     | Controls the button background and border color.        |
| `style`            | `"full"`, `"border"`                            | `"full"`     | Select between solid button or bordered button style.   |
| `textColor`        | `string` (Tailwind class text color)            | `undefined`  | Controls the text color if needed.                      |
| `icon`             | `ReactNode` (optional)                          | `undefined`  | Add an icon to the button (React element).              |
| `iconDirection`    | `"left"`, `"right"`                             | `"left"`     | Choose the side of the icon relative to the label.      |
| `duration`         | `75`, `100`, `150`, `200`, `500`, `700`, `1000` | `200`        | Controls the transition duration (ms).                  |
| `animationOnClick` | `true`, `false`                                 | `false`      | Enables a "press" animation when the button is clicked. |
| `disabled`         | `true`, `false`                                 | `false`      | Disables the button and applies disabled styles.        |
| `onClick`          | `function` (optional)                           | `undefined`  | Click event handler function.                           |

---

## 🛠️ Example Usage

```jsx
<Button
    type="submit"
    label="Submit"
    size="large"
    color="green"
    style="border"
    textColor="text-green-700"
    icon={<YourIconComponent />}
    iconDirection="right"
    duration={500}
    animationOnClick={true}
    onClick={() => console.log("Submitted!")}
/>
```

---

## 📌 Notes

-   TailwindCSS classes are **precompiled** inside `dist/button.css`.
-   No Tailwind setup is required in your project.
-   Just import the CSS once, and everything will work out of the box!

---

## 💬 Support

For questions, feature requests, or feedback, feel free to open an issue or contribute.

---

Made with ❤️ by Flexa UI.
