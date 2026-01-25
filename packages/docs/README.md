# @beryl-ui/docs

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
  <img alt="Build" src="https://img.shields.io/github/actions/workflow/status/Robson16/beryl-ui/deploy-docs.yml?branch=main&color=10B981&label=build">
</p>

Interactive documentation for **beryl-ui**, built with [Storybook](https://storybook.js.org/). Provides a complete visual development environment and presentation of all components from `@beryl-ui/react`.

> View the complete documentation online at: **robson16.github.io/beryl-ui**

## 💻 Local Development 

To run Storybook locally, follow the steps below from the root of the monorepo.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development environment:**
    This command uses Turborepo to start Storybook and necessary packages in watch mode.
    ```bash
    npm run dev
    ```
    Storybook will be available at `http://localhost:6006`.

## 🛠️ Useful Scripts

Within this package (`packages/docs`), you can run the following scripts:

*   **`npm run dev`**: Starts Storybook in development mode.
*   **`npm run build`**: Generates a static build of Storybook in the `storybook-static` folder.
*   **`npm run deploy-storybook`**: Builds Storybook and publishes it to GitHub Pages.
*   **`npm run lint`**: Runs ESLint to check the code quality of the documentation.

## ✍️ How to Contribute

To add or update component documentation:

1.  **Create a story file**: For a component called `MyComponent`, create a file `MyComponent.stories.tsx` inside the `src/stories` folder.
2.  **Write the stories**: Use the Component Story Format (CSF) to define different states and variations of your component.
3.  **Add MDX documentation (optional)**: For richer documentation, you can create a `MyComponent.mdx` file and associate it with your story to provide detailed descriptions, usage examples, and props tables.

## 📄 License

This package is under the MIT license. See the LICENSE.md file in the root of the repository for more details.