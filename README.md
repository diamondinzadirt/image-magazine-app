# Image Magazine App

## Hosted on Netlify

You can view the live version of the site [here](https://image-magazine-app.netlify.app).

Welcome to the **Image Filter Magazine App!** This is a single-page application (SPA) built using React.js that allows users to browse and filter through a collection of images fetched from a public API.

## Features

- SEARCH AND FILTER: Users can search for images based on keywords and filter them accordingly.

- PAGINATION: Pagination controls are provided to navigate through multiple pages of images, with each page displaying a fixed number of images.

- RESPONSIVE DESIGN: The application is designed to be responsive and adapt seamlessly across various devices, including desktops, tablets, and mobile phones.

- CLEAN USER INTERFACE: The user interface is designed to be clean, intuitive, and user-friendly, providing an optimal browsing experience.

- UNITS TEST: Unit tests are implemented using Jest to ensure code quality, reliability, and maintainability.

## Getting Started

To run the Image Magazine App locally on your machine, follow these steps in your terminal

```bash
git clone <repository_url>
cd image-filter-app
npm install
npm start
```

These instructions will run this app on your browser using localhost:3000 after successfully installing all the necessary Dev dependencies.

## My experience in putting it together

**SearchOption Component**

- Thought Process:

1. I was able to think of a search input that allows users to filter images based on keywords and an icon which helps users know that the search input can be used for searching
2. I also had to pinpoint the importance of making the search input user-friendly and visually appealing.

- Design Decisions:

1. Utilize a simple text input field for the search functionality.
2. Include a placeholder text to guide users on how to use the search input.
3. Include an icon that indicates an input search field

- Testing Strategy:

1. Unit Test: Ensure that the search input field is rendered correctly
2. Test user interactions: Verify that users can input text and trigger the search functionality.
3. Test edge cases: I created scenarios to indicate empty images due to empty input or invalid search queries whic

**Gallery Component**

- Thought Process:

1. identified the fact i had to display a grid of images fetched from an API.
2. Considered factors such as image size, layout, and user experience along multiple devices

-Design Decisions

1. Had to implement a grid layout to display images in an organized manner.
2. Include image titles for better understanding for images
3. Optimize image loading for faster rendering and improved performance.

- Testing Strategy:

1. Unit Test: Ensure that the Gallery component renders correctly and displays images fetched from the API.
2. Test image loading: Verify that images load properly and display without errors.
3. Test responsiveness: Check how the gallery layout adapts to different screen sizes and devices.

**Pagination Component**

- Thought Process:

1. Thought of the need to paginate search results for better user experience after rendering a certain amount of image
2. Consider the design and functionality of pagination controls.

- Design Decisions:

1. Implement pagination controls to navigate between pages of search results after rendering 12 images
2. I put options for users to move to the previous or next page, as well as to jump to specific pages and also skip couple of pages
3. Design pagination controls to be visually appealing and intuitive.

- Testing Strategy

1. Unit Test to ensure that the Pagination component renders correctly and displays pagination controls with the right function
2. Tested pagination functionality to be sure users can navigate the page smoothly
3. Test edge cases: Check for scenarios such as navigating to the first or last page, as well as handling of invalid page numbers.
