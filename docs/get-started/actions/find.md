---
title: find
layout: default
nav_order: 1
parent: Actions
grand_parent: Tests
description: Locate and interact with an element on the page.
---

# find

The `find` action locates an element in the current interface based on its display text or a CSS/XPath selector. After finding the element, you can optionally interact with it, such as clicking it or typing into it.

If multiple elements match the specified criteria (`elementText` and/or `selector`), the step operates on the first matched element. Ensure your criteria uniquely identify the target element.

You can specify the target element directly using a string (for simple text or selector lookup) or use an object for more detailed options and interactions:

- **String Shorthand:** Provide the display text or CSS/XPath selector directly as the value for the `find` key. If elements are found by both text and selector, the element found by matching text is used.
  - Example: `"find": "Login"` or `"find": "#username"`.
- **Object Format:** Use an object with the following properties:
  - `elementText`: (Optional) The display text of the element to find. If combined with `selector`, the element must match both.
  - `selector`: (Optional) The CSS or XPath selector of the element to find. If combined with `elementText`, the element must match both. *At least one of `elementText` or `selector` is required.*
  - `timeout`: (Optional) Maximum duration in milliseconds to wait for the element to exist (default: 5000).
  - `moveTo`: (Optional) Move the cursor to the element. If the element isn't visible, it's scrolled into view (default: `true`).
  - `click`: (Optional) Click the element after finding it. Can be `true` (for a default left click), `"left"`, `"right"`, `"middle"`, or an object like `{ "button": "right" }`.
  - `type`: (Optional) Type keys after finding the element. Requires the element to be made active first (e.g., by using `click: true`). Accepts a string or an object like `{ "keys": "my text", "inputDelay": 100 }`. See [`type`](type) for details.

**Setting Variables:** To capture a found element's attributes into variables for later steps, use the step-level `variables` object. You can assign values based on the element using expressions like `$$element.text`.

> For comprehensive options, see the [`find`](/docs/references/schemas/find) reference.

## Examples

Here are a few ways you might use the `find` action:

### Find an element by its text (string shorthand)

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Find the login button by its text.",
          "find": "Login"
        }
      ]
    }
  ]
}
```

### Find an element by its selector (string shorthand)

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Find the username field by its ID (CSS selector).",
          "find": "#username"
        }
      ]
    }
  ]
}
```

### Find an element by selector and click it (object format)

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Find the submit button by selector and click it.",
          "find": {
            "selector": "button[type='submit']",
            "click": true
          }
        }
      ]
    }
  ]
}
```

### Find an element by selector, click it, and type into it (object format)

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Find the search input by selector, click, and type.",
          "find": {
            "selector": "#input",
            "click": true,
            "type": "find action"
          }
        }
      ]
    }
  ]
}
```

### Find an element combining selector and text with a timeout

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Find a specific link within a nav bar, waiting up to 10 seconds.",
          "find": {
            "selector": "nav > ul > li > a",
            "elementText": "Downloads",
            "timeout": 10000
          }
        }
      ]
    }
  ]
}
```

### Find an element and right-click it

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Find an image by selector and right-click it.",
          "find": {
            "selector": "img.product-image",
            "click": "right"
          }
        }
      ]
    }
  ]
}
```

### Find an element and middle-click it

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Find a button by text and middle-click it.",
          "find": {
            "elementText": "Open New Tab",
            "click": "middle"
          }
        }
      ]
    }
  ]
}
```
