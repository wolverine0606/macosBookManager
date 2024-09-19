📚 Book Manager

A Book Manager application built with React Native and powered by Redux Toolkit for efficient state management. 
This project demonstrates the usage of Redux for handling asynchronous requests, 
entity management, and state slicing. The app fetches and displays a list of books, 
allowing users to manage and search through their book collection seamlessly.

🚀 Features

	•	Book List Management: Fetches a list of books from an external source and displays them.
	•	Redux Toolkit Integration: Uses Redux Toolkit’s createSlice and createEntityAdapter for optimal state management and scalability.
	•	Entity Adapter: Handles entities efficiently with CRUD operations via createEntityAdapter.
	•	Asynchronous Actions: Integrates Redux Thunks for handling async requests (e.g., fetching books).
	•	Clean State Handling: Replaces the previous book list with new data to maintain an up-to-date state.
	•	Search Functionality: Allows users to search through their book list using a query.

🛠️ Tech Stack

	•	React Native: Cross-platform mobile development framework.
	•	Redux Toolkit: Simplified state management with slices, thunks, and entity adapters.
	•	TypeScript: Typed superset of JavaScript for robust code.
	•	REST API Integration: Fetches book data using async thunks.

🔨 Project Structure
src/
│
├── assets/                       # Static assets such as images or fonts
│
├── data/
│   └── models/
│       └── books.ts              # Data models for books
│
├── view/
│   ├── components/               # Reusable UI components
│   │   ├── BookItem.tsx          # Component to display individual book item
│   │   ├── GoBack.tsx            # Component for back navigation
│   │   ├── SearchBar.tsx         # Component for search functionality
│   │   └── useAppNavigation.tsx  # Custom hook for navigation
│   │
│   ├── modules/
│   │   └── books/
│   │       ├── hooks.ts          # Custom hooks related to books
│   │       ├── selectors.ts      # Selectors for extracting data from state
│   │       ├── slice.ts          # Redux slice for books
│   │       ├── thunks.ts         # Async actions (thunks) for fetching books
│   │       └── types.ts          # TypeScript types related to books
│   │
│   ├── navigation/
│   │   ├── App.tsx               # App navigation setup (e.g., stack navigation)
│   │   └── types.ts              # Navigation-related TypeScript types
│   │
│   ├── screens/                  # Application screens
│   │   ├── BookScreen.tsx        # Screen to display book details
│   │   └── HomeScreen.tsx        # Main screen displaying the book list
│
├── store/                        # Redux store setup and utilities
│   ├── hooks.ts                  # Custom hooks for Redux store usage
│   ├── redux-utils.ts            # Utility functions for Redux (e.g., status helpers)
│   ├── store.ts                  # Root Redux store configuration
│   └── types.ts                  # TypeScript types for the store and state
│
├── theme/                        # Styling and theme-related files
│   ├── colors.tsx                # Color palette definitions
│   └── index.tsx                 # Theme setup (e.g., global styles)
│
├── App.tsx                       # Entry point of the React Native app
├── .eslintrc.js                  # ESLint configuration for code linting
