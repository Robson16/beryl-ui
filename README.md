# Beryl UI

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/react">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/react?color=10B981&label=%40beryl-ui%2Freact">
  </a>
  <img alt="Build" src="https://img.shields.io/github/actions/workflow/status/Robson16/beryl-ui/deploy-docs.yml?branch=main&color=10B981&label=build">
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
</p>

<p align="center">
  A robust and professional design system for React applications. A complete library of reusable and well-documented components.
</p>

<p align="center">
  <a href="#-components">Components</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-local-development">Development</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

> **Documentation:** View all components and their complete documentation in our [**Storybook online**](https://robson16.github.io/beryl-ui/).

## ✨ Components

List of components that have been developed and are ready to use:

- [x] **Avatar**: Display image with fallback.
- [x] **Button**: Button for various actions with variants.
- [x] **Checkbox**: Selection box.
- [x] **Heading**: Title for sections.
- [x] **MultiStep**: Progress indicator for multi-step forms.
- [x] **Text**: Component for general text.
- [x] **TextArea**: Multi-line text field.
- [x] **TextInput**: Text input field.
- [x] **Toast**: Feedback message for the user.
- [x] **Tooltip**: Text hint with contextual information.

## 🚀 Getting Started 

To use the **beryl-ui** components in your project, follow the steps below.

### Installation

You will need to install the main package and its `peer` dependencies (`react`, `react-dom`, and `styled-components`).

```bash
npm install @beryl-ui/react styled-components
# or
yarn add @beryl-ui/react styled-components
# or
pnpm add @beryl-ui/react styled-components
```

### Configuration

For the components to work correctly with the default theme, you need to wrap your application with the `ThemeProvider` from `styled-components`.

```tsx
// In your main file (e.g: App.tsx)
import { globalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@beryl-ui/react/styles' // Adjust the path if needed

globalStyles()

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* ... your code and routes ... */}
    </ThemeProvider>
  )
}
```

## 💻 Local Development

If you want to contribute to the project, follow these instructions to set up your development environment.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Robson16/beryl-ui.git
    cd beryl-ui
    ```

2.  **Install dependencies:**
    This is a monorepo configured with workspaces. Use NPM to install dependencies for all packages.
    ```bash
    npm install
    ```

3.  **Run the development environment:**
    This project uses **Turborepo** to manage the monorepo scripts. To start Storybook and packages in development mode, run:
    ```bash
    npm run dev
    ```
    > This command will run the `dev` script for all packages in parallel, allowing you to view components in Storybook and make changes to the source code.

## 📝 License

This project is under the MIT license. See the LICENSE.md file for more details.