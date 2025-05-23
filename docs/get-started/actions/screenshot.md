---
title: screenshot
layout: default
nav_order: 1 # Adjust nav_order as needed
parent: Actions
grand_parent: Tests
description: Take a screenshot in PNG format and optionally perform visual regression testing.
---

# screenshot

The `screenshot` action captures a PNG image of the current browser viewport or a specific element. It can also perform visual regression testing by comparing the captured image against a previously saved reference image.

You can specify the screenshot action in several ways:

- **Boolean Shorthand:** Set `screenshot: true` to capture the full viewport with default settings.
- **String Shorthand:** Provide a file path directly as the value for the `screenshot` key (e.g., `screenshot: "my_screenshot.png"`). This saves the full viewport screenshot to the specified path.
- **Object Format:** Use an object for more control over the path, visual comparison, and cropping:
  - `path`: (Optional) The file path where the screenshot will be saved. Can include directories. If omitted, a default path is generated.
  - `directory`: (Optional) The directory where the screenshot will be saved. If `path` includes a directory, this is ignored. Defaults to the configured output directory.
  - `maxVariation`: (Optional) The maximum acceptable visual difference (0 to 1) when comparing against a reference image. If the variation exceeds this threshold, the step fails. If set, visual comparison is enabled.
  - `overwrite`: (Optional) Controls when to overwrite the reference image. Options:
    - `never`: Never overwrite the reference image (default).
    - `always`: Always overwrite the reference image with the new capture.
    - `aboveVariation`: Overwrite only if the visual difference exceeds `maxVariation`.
  - `crop`: (Optional) Crop the screenshot to a specific element. Provide a CSS/XPath selector string (e.g., `"#myElement"`) or an object:
    - `selector`: (Required in object) The CSS or XPath selector of the element to crop to.
    - `elementText`: (Optional) Display text to further specify the element if the selector isn't unique.
    - `padding`: (Optional) Add padding around the element before cropping. Can be a single number (all sides) or an object `{ top, right, bottom, left }`.

**Visual Regression Testing:** If `maxVariation` is set and a reference image exists at the target `path`, the action compares the new screenshot to the reference. If the difference is within `maxVariation`, the step passes. If it exceeds the threshold, the step fails, and behavior depends on the `overwrite` setting.

> For comprehensive options, see the [`screenshot`](/docs/references/schemas/screenshot) reference.

## Examples

Here are a few ways you might use the `screenshot` action:

### Simple full viewport screenshot (boolean shorthand)

Saves to a default path like `output/screenshot_1745032062266.png`.

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Take a simple screenshot.",
          "screenshot": true
        }
      ]
    }
  ]
}
```

### Full viewport screenshot to specific path (string shorthand)

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Save screenshot to a specific file.",
          "screenshot": "./output/images/login_page.png"
        }
      ]
    }
  ]
}
```

### Full viewport screenshot with visual comparison (object format)

Compares against `./output/reference_images/home_page.png`. Fails if difference > 5% (`0.05`). Overwrites reference if failure occurs.

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Take screenshot and compare to reference.",
          "screenshot": {
            "path": "home_page.png",
            "directory": "./output/reference_images",
            "maxVariation": 0.05,
            "overwrite": "aboveVariation"
          }
        }
      ]
    }
  ]
}
```

### Screenshot cropped to an element (object format)

Captures only the element matching the `#main-content` selector.

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Screenshot only the main content area.",
          "screenshot": {
            "path": "main_content_area.png",
            "directory": "./output/element_shots",
            "crop": "#main-content"
          }
        }
      ]
    }
  ]
}
```

### Screenshot cropped to an element with padding and visual comparison

Captures the element with text "Submit Button", adds 10px padding, and compares against a reference image.

```json
{
  "tests": [
    {
      "steps": [
        {
          "description": "Screenshot a button with padding and compare.",
          "screenshot": {
            "path": "submit_button_padded.png",
            "directory": "./output/reference_elements",
            "crop": {
              "elementText": "Submit Button",
              "padding": 10
            },
            "maxVariation": 0.01,
            "overwrite": "aboveVariation"
          }
        }
      ]
    }
  ]
}
```
