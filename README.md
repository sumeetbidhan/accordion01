# Accordion Component

This repository contains a simple yet fully functional **Accordion** component built with **HTML**, **CSS**, and **JavaScript**. The accordion allows users to click on headers to toggle the visibility of content. This project is a great example of a beginner-friendly, interactive UI component, and it's a perfect addition to any web project.

## Demo

You can view the live demo of the Accordion component [here](https://roadmap.sh/projects/accordion).

## Project Overview

The Accordion component allows users to toggle between different sections of content. It is highly customizable, lightweight, and can be easily integrated into any website or web application. When a user clicks on a section header, its corresponding content expands, while other sections collapse, making it a great tool for organizing information in a compact format.

## Features

- **Collapsible Sections**: Click on any header to expand or collapse its content.
- **Smooth Transitions**: Animated transitions for content expansion and collapse.
- **Multiple Sections**: The accordion can have multiple sections, and all of them are interactive.
- **Mobile-Friendly**: Responsive design that works well on mobile devices.
- **Simple Setup**: Easy-to-understand code structure with no dependencies.

## Technologies Used

- **HTML**: The basic structure of the accordion and content sections.
- **CSS**: Styling the accordion to provide a visually appealing user experience.
- **JavaScript**: To handle the interaction (expanding/collapsing sections) using event listeners.

## Installation

### Clone the Repository

To get started, you need to clone this repository:

```bash
git clone https://github.com/sumeetbidhan/accordion01.git
```

### Open the Project Locally

1. After cloning the repo, navigate into the project directory:
   ```bash
   cd accordion01
   ```

2. Open the `index.html` file in your browser:
   - You can directly open the `index.html` file from your local file system.
   - Alternatively, use a local web server to serve the files.

The Accordion will work out-of-the-box when you open the `index.html` file in your browser.

## How It Works

The Accordion component is composed of several interactive sections. Each section is a `div` containing a header and the content. The content is hidden by default and expands when its corresponding header is clicked. When one section is expanded, any previously expanded section collapses. This is achieved through JavaScript, which dynamically adjusts the content's `max-height` for smooth transitions.

### Breakdown of the Code

#### HTML Structure:
- The `accordion` container holds multiple accordion items.
- Each accordion item has a `button` (header) and a `div` (content).
- The header contains the clickable text, and the content contains the information to be displayed.

#### CSS Styling:
- The `.accordion` container defines the overall appearance of the accordion.
- `.accordion-header` is the clickable button, which uses CSS to style it.
- `.accordion-content` is the hidden content, with the maximum height being adjusted dynamically using JavaScript.

#### JavaScript Interactivity:
- **Event Listeners**: When the user clicks on a header, an event listener triggers, checking if the section is already expanded. If so, it collapses the content; otherwise, it expands the clicked section.
- **Toggling Class**: The `.active` class is toggled to manage which section is expanded.
- **Smooth Transitions**: JavaScript dynamically adjusts the `max-height` property of the content sections to achieve a smooth animation effect.

#### Code Walkthrough:

1. **DOM Content Loaded**: The `DOMContentLoaded` event ensures that the script runs after the page is fully loaded.
2. **Query Selectors**: The script selects all `.accordion-header` elements and adds click event listeners to them.
3. **Toggling Content**: When a header is clicked, it toggles the visibility of the content by adjusting the `max-height` property, and it also adds or removes the `.active` class to the header for styling purposes.

## Files Structure

- `index.html`: Contains the structure of the accordion component.
- `style.css`: Styles the accordion component and its items, including transitions and animations.
- `script.js`: Contains the logic for handling click events and dynamically adjusting the content visibility.

## Example

Here’s an example of how the Accordion looks:

```html
<div class="accordion">
  <h2>Frequently Asked Questions</h2>
  <div class="accordion-item">
    <button class="accordion-header">What is an Accordion?</button>
    <div class="accordion-content">
      <p>An accordion is a component that expands and collapses sections of content.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">How does it work?</button>
    <div class="accordion-content">
      <p>When you click a header, its content expands while other sections collapse.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">Why use it?</button>
    <div class="accordion-content">
      <p>It helps organise content and improves user experience by keeping the interface clean.</p>
    </div>
  </div>
</div>
```

## Contributing

We welcome contributions to improve this project. If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

### How to contribute:
1. Fork this repository.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/your-username/accordion01.git
   ```
3. Create a branch for your feature or fix:
   ```bash
   git checkout -b feature-name
   ```
4. Make your changes and commit them:
   ```bash
   git commit -am 'Add new feature or fix bug'
   ```
5. Push to your branch:
   ```bash
   git push origin feature-name
   ```
6. Create a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or suggestions, feel free to reach out to me via [email](mailto:sumeetbidhanwork@gmail.com).

---

Feel free to modify the repository as per your needs. If you like the project, please give it a star on GitHub!
```

### Key Sections of the `README.md`:

1. **Project Overview**: Describes what the project is about and what problem it solves.
2. **Demo**: Provides a live demo link to showcase the project.
3. **Technologies Used**: Lists the technologies and tools used to create the project.
4. **Installation**: Step-by-step guide to clone and run the project locally.
5. **How It Works**: Explains the functionality of the accordion, how the components are structured, and how they work together.
6. **Contributing**: Encourages others to contribute and explains the process for doing so.
7. **License**: States the open-source license under which the project is made available.

By following this detailed `README.md`, other developers will easily understand your project and how to use, contribute, or extend it.