# @beryl-ui/prettier-config

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/prettier-config">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/prettier-config?color=8257E5&label=%40robson16%2Fprettier-config">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/Robson16/ignite-design-system?color=8257E5">
</p>

Este pacote contém as configurações de Prettier compartilhadas para o **Ignite Design System** monorepo. Ele garante que o código seja formatado de maneira consistente em todos os projetos.

## 🚀 Instalação

Instale este pacote e o `prettier` como `devDependencies` em seus projetos:

```bash
npm install prettier @beryl-ui/prettier-config --save-dev
# ou
yarn add prettier @beryl-ui/prettier-config --dev
# ou
pnpm add prettier @beryl-ui/prettier-config --save-dev
```

## ⚙️ Uso

Para usar as configurações, estenda-as em seu arquivo `.prettierrc.js` ou adicione uma entrada `prettier` em seu `package.json`.

### Exemplo de `.prettierrc.js`

```javascript
// .prettierrc.js
module.exports = require('@beryl-ui/prettier-config');
```

### Exemplo em `package.json`

```json
// package.json
{
  "name": "seu-projeto",
  "version": "1.0.0",
  "prettier": "@beryl-ui/prettier-config"
}
```

## 📄 Licença

Este pacote está sob a licença MIT. Veja o arquivo LICENSE.md na raiz do repositório para mais detalhes.