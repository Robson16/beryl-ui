# @beryl-ui/eslint-config

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/eslint-config">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/eslint-config?color=8257E5&label=%40robson16%2Feslint-config">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/Robson16/ignite-design-system?color=8257E5">
</p>

Este pacote contém as configurações de ESLint compartilhadas para o **Ignite Design System** monorepo. Ele ajuda a manter um estilo de código consistente e a identificar problemas em potencial em todos os projetos.

## 🚀 Instalação

Instale este pacote e suas dependências `peer` como `devDependencies` em seus projetos:

```bash
npm install eslint @beryl-ui/eslint-config --save-dev
# ou
yarn add eslint @beryl-ui/eslint-config --dev
# ou
pnpm add eslint @beryl-ui/eslint-config --save-dev
```

Você também precisará instalar as dependências de plugins que este pacote estende, como `@typescript-eslint/eslint-plugin`, `eslint-plugin-react`, etc. Verifique o `package.json` deste pacote para a lista completa de `peerDependencies`.

## ⚙️ Uso

Para usar as configurações, estenda-as em seu arquivo `.eslintrc.json` ou `eslint.config.js`.

### Exemplo de `.eslintrc.json`

```json
// .eslintrc.json
{
  "extends": [
    "@beryl-ui/eslint-config"
    // Adicione outras configurações ou overrides aqui, se necessário
  ],
  "root": true,
  "env": {
    "node": true,
    "es6": true
  }
}
```

## 📄 Licença

Este pacote está sob a licença MIT. Veja o arquivo LICENSE.md na raiz do repositório para mais detalhes.