# Debugging: JS and Chrome Developer Tools

## Learning Objectives

- Open and close **Chrome Dev Tools**
- Use the Chrome Dev Tools **Console** to review errors
- Inspect **HTML elements** and **Box Models**
- Render **mobile device emulations**

---

## Getting Started

- `Fork` and `Clone` this repo
- Revise the errors in `debugging.js` according to the instructions in the [Exercise Section](#exercise).
  - You'll know you've completed the exercise when the `Console` no longer prints any errors!

# Exercise

## Open Chrome Dev Tools

Open Chrome Dev Tools using the following methods:

- In the Chrome menu
  - `More Tools --> Developer Tools`
- Right-click in your browser and select:
  - `Inspect`
- Use this keyboard shortcut to open the `Elements` tab:
  - `Alt+Cmd+I`
- Use this keyboard shortcut to open the `Console` tab:
  - `Alt+Cmd+J`

---

## Chrome Dev Tools Tabs

In **Chrome Dev Tools**, there is a top bar which includes several different tabs, including:

- `Elements`: Displays a webpage's HTML.
  - Hover on a tag to view an element's `Box Model` diagram.
- `Console`: Displays `JS` outputs and errors
- `Sources`: Displays each file that is used to build a webpage.
- `Network`: Displays `HTTP` requests made to and from the webpage including the `request` and `response` `headers`, `body`, `params`, `status code` and more.

---

## Mobile Device Emulation

In the top left corner of Chrome Dev Tools there is a small icon of a cell phone. Selecting this icon renders a mobile device emulation of the webpage.

- Mobile Device Emulation previews are essential to developers building front-end apps.
- It renders a preview of responsive design elements and their behavior in a number of different device formats.

---

## Using the Chrome Dev Tools Debugger

The file `debugging.js` includes `JS` code with a number of errors. In order to correct these errors using the `Debugger` you must:

- Use the `Console` to determine which line in `debugging.js` throws the `Error`
  - `Error` text appears in red.
- Revise the code in `debugging.js`
- Refresh the webpage and repeat the steps again until no more errors are printed to the `Console`

_**Hint:** Once you've completely debugged `debugging.js` a message will render to the page._

---

## Going Further

- The [Google Developers Website](https://developers.google.com/web/tools/chrome-devtools/javascript/) provides detailed documentation on **Chrome Dev Tools** and **Debugger**
