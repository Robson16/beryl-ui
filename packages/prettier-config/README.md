# @beryl-ui/prettier-config

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
  <img alt="Build" src="https://img.shields.io/github/actions/workflow/status/Robson16/beryl-ui/deploy-docs.yml?branch=main&color=10B981&label=build">
</p>

Configuração compartilhada de Prettier para o monorepo **beryl-ui**. Garante formatação de código consistente e profissional em todos os pacotes do sistema.

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