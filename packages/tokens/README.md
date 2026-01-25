# @beryl-ui/tokens

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/tokens">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/tokens?color=10B981&label=%40beryl-ui%2Ftokens">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
</p>

Centralized design tokens from **beryl-ui** that define the complete visual identity of the system. They serve as a single source of truth for colors, spacing, typography, borders, and other design values.
 
## ✨ Included Tokens

*   **Colors**: Primary, secondary, neutral color palette, etc.
*   **Spacing**: Values for margins, padding, and gaps.
*   **Typography**: Font families, sizes, weights, and line heights.
*   **Borders**: Border radius values.
*   **Fonts**: Font families.
*   **Line Heights**: Line height values.
*   **Font Sizes**: Font size values.

## 🚀 Installation

Install this package in your projects that need to access design values:

```bash
npm install @beryl-ui/tokens
# or
yarn add @beryl-ui/tokens
# or
pnpm add @beryl-ui/tokens
```

## ⚙️ Usage

You can import and use the tokens directly in your JavaScript/TypeScript code, especially useful with CSS-in-JS libraries like `styled-components`.

```javascript
// Example of use in a JavaScript/TypeScript file
import { colors, fontSizes, space } from '@beryl-ui/tokens'

console.log(colors.gray800) // #202024
console.log(fontSizes.md)   // 1rem
console.log(space[4])       // 1rem
```

## 📄 License

This package is under the MIT license. See the LICENSE.md file in the root of the repository for more details.