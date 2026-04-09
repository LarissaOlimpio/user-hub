# 👥 UserHub - User Management Interface

A modern interface for viewing and managing users was developed as a technical challenge.

## 🛠️ Tech Stack

This project was built using the most modern development standards:

* **React 18** with **TypeScript**: Ensuring type safety and a component-based UI.
* **Material UI (MUI) v6**: Professional component library for a responsive and accessible design.
* **TanStack Query (React Query) v5**: Powerful asynchronous state management for data fetching, caching, and synchronization.
* **Vitest & React Testing Library**: High-performance testing framework focused on testing application behavior from the user's perspective.
* **Vite**: Next-generation build tool for a fast development workflow.

## ✨ Key Features

* **User Visualization**: Dynamic listing consuming the JSONPlaceholder public API.
* **Search and Filtering**: Real-time filtering by username with logic decoupled into custom hooks.
* **Smart Pagination**: Fluid navigation by dividing large datasets into smaller, manageable pages.
* **UX Optimized with Skeletons**: 
    * **Skeleton Screens**: Replacing traditional spinners with "skeleton" layouts that reduce perceived loading time and prevent Layout Shift.
* **User Details Modal**: Detailed display of additional information (company, address, contact) through an accessible modal interface.
  * The modal remains open after a page refresh, maintaining the user's context.
  * Specific profiles can be shared directly via link.
* **Clean Code Architecture**: Separation of concerns using a **Service Layer** for API calls and **Custom Hooks** for search and pagination logic.

## 🧪 Unit Testing

The project uses **Vitest** to ensure code quality through unit and integration tests.

1.  **Run tests in the terminal (Watch Mode):**
    ```bash
    npm run test
    ```

2.  **Run tests with Visual Interface (Vitest UI):**
    ```bash
    npm run test:ui
    ```

* **Coverage**: Tests cover hook logic (`useSearch`, `usePagination`) and the integrity of critical components (`SearchBar`, `UserCard`, `UserDetailsModal`).

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/LarissaOlimpio/user-hub.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```text
src/
 ├── components/      # UI Components (Cards, Modals, Skeletons)
 ├── hooks/           # Business logic and custom hooks (includes .test.ts files)
 ├── services/        # API Layer (api.ts) for centralized fetch logic
 ├── teste/           # Global configuration and test environment setup
 ├── types/           # TypeScript interfaces and API definitions
 └── utils/           # Utility functions and constants

```


 Developed with ❤️ by Larissa Olimpio
