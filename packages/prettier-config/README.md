# @beryl-ui/prettier-config

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
  <img alt="Build" src="https://img.shields.io/github/actions/workflow/status/Robson16/beryl-ui/deploy-docs.yml?branch=main&color=10B981&label=build">
</p>

Shared Prettier configuration for the **beryl-ui** monorepo. Ensures consistent and professional code formatting across all packages of the system.

## 🚀 Installation 

Install this package and `prettier` as `devDependencies` in your projects:

```bash
npm install prettier @beryl-ui/prettier-config --save-dev
# or
yarn add prettier @beryl-ui/prettier-config --dev
# or
pnpm add prettier @beryl-ui/prettier-config --save-dev
```

## ⚙️ Usage

To use the configurations, extend them in your `.prettierrc.js` file or add a `prettier` entry in your `package.json`.

### Example of `.prettierrc.js`

```javascript
// .prettierrc.js
module.exports = require('@beryl-ui/prettier-config');
```

### Example in `package.json`

```json
// package.json
{
  "name": "your-project",
  "version": "1.0.0",
  "prettier": "@beryl-ui/prettier-config"
}
```

## 📄 License

This package is under the MIT license. See the LICENSE.md file in the root of the repository for more details.