# @beryl-ui/react

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/react">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/react?color=10B981&label=%40beryl-ui%2Freact">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
</p>

Professional React component library from **beryl-ui**, built with `styled-components` and `Radix UI` for maximum performance and accessibility.

## ✨ Included Components

*   **Avatar**: Display image with fallback.
*   **Button**: Button for various actions with variants.
*   **Checkbox**: Selection box.
*   **Heading**: Title for sections.
*   **MultiStep**: Progress indicator for multi-step forms.
*   **Text**: Component for general text.
*   **TextArea**: Multi-line text field.
*   **TextInput**: Text input field.
*   **Toast**: Feedback message for the user (requires `ToastProvider`).

> For interactive documentation and usage examples for each component, visit our [**Storybook online**](https://robson16.github.io/beryl-ui/).

## 🚀 Installation

To use the React components in your project, install the package via npm, yarn, or pnpm:

```bash
npm install @beryl-ui/react styled-components
# or
yarn add @beryl-ui/react styled-components
# or
pnpm add @beryl-ui/react styled-components
```

## ⚙️ Configuration

For the components to work correctly with the default theme, you need to wrap your application with the `ThemeProvider` from `styled-components` and apply the global styles.

```tsx
// In your main file (e.g: App.tsx)
import { globalStyles } from '@beryl-ui/react/styles' // Import global styles
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@beryl-ui/react/styles' // Import the default theme

globalStyles() // Apply global styles

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* ... your components and routes that will use the design system ... */}
    </ThemeProvider>
  )
}
```

## 💡 Basic Usage

Example of how to use a `Button` component:

```tsx
import { Button } from '@beryl-ui/react'

function MyComponent() {
  return (
    <Button onClick={() => alert('Clicked!')}>
      Click here
    </Button>
  )
}
```

## 🛠️ Local Development (for contributors)

If you are contributing to this package specifically within the monorepo:

1.  **Navigate to the package folder:**
    ```bash
    cd packages/react
    ```
2.  **Run development mode:**
    To compile the package in `watch` mode and see changes in real-time (usually used in conjunction with the monorepo's Storybook):
    ```bash
    npm run dev
    ```
    (This `dev` script is defined in the `package.json` of `packages/react` and uses `tsup` to watch for changes).

## 📄 License

This package is under the MIT license. See the LICENSE.md file in the root of the repository for more details.