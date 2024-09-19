<img src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" alt="technology" width="120" height="120" />

# Multi-Select Dropdown with Keyboard Navigation

This project is a multi-select dropdown implementation without using any libraries. It integrates with an API to dynamically load content, handle search queries, and supports keyboard navigation built with React.

## Features

- **Multi-Select Dropdown**: Allows users to select multiple items from a list.
- **API Integration**: Query the API for data and display the results in a dropdown.
- **Custom Dropdown**: The dropdown is written completely in JavaScript, without using any external libraries.
- **Query Highlighting**: Search queries are highlighted in the dropdown results for easier navigation (e.g., searching for "Ric" shows "Ric" in bold).
- **Keyboard Navigation**: Supports full keyboard navigation with arrow keys and tabbing. Users can navigate the dropdown, select/deselect items, and interact with the input field using keyboard controls.
- **Loading State**: Displays a loading state while waiting for API responses.
- **Error Handling**: Error states are handled and displayed to the user, ensuring a smooth UX even when issues occur.
- **Input Field Integration**: Selected results are displayed in the input field and can be removed by clicking or using keyboard shortcuts.

## Technologies Used

- **React.js**
- **React Query**: Server state management library for fetching, caching, and updating server data in React.

## Setup

To run this project locally:

1. **Install dependencies**:

   ```bash
   yarn install
   ```

2. **Run the development server**:

   ```bash
   yarn start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).
