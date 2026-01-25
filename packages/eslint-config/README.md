# @beryl-ui/eslint-config

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
  <img alt="Build" src="https://img.shields.io/github/actions/workflow/status/Robson16/beryl-ui/deploy-docs.yml?branch=main&color=10B981&label=build">
</p>

Shared ESLint configuration for the **beryl-ui** monorepo. Establishes consistent code quality standards and detects potential issues in all packages of the system.
 
## 🚀 Installation

Install this package and its `peer` dependencies as `devDependencies` in your projects:

```bash
npm install eslint @beryl-ui/eslint-config --save-dev
# or
yarn add eslint @beryl-ui/eslint-config --dev
# or
pnpm add eslint @beryl-ui/eslint-config --save-dev
```

You will also need to install the plugin dependencies that this package extends, such as `@typescript-eslint/eslint-plugin`, `eslint-plugin-react`, etc. Check the `package.json` of this package for the complete list of `peerDependencies`.

## ⚙️ Usage

To use the configurations, extend them in your `.eslintrc.json` or `eslint.config.js` file.

### Example of `.eslintrc.json`

```json
// .eslintrc.json
{
  "extends": [
    "@beryl-ui/eslint-config"
    // Add other configurations or overrides here if needed
  ],
  "root": true,
  "env": {
    "node": true,
    "es6": true
  }
}
```

## 📄 License

This package is under the MIT license. See the LICENSE.md file in the root of the repository for more details.