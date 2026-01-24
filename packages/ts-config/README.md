# @beryl-ui/ts-config

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/ts-config">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/ts-config?color=8257E5&label=%40robson16%2Fts-config">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/Robson16/ignite-design-system?color=8257E5">
</p>

Este pacote contém as configurações de TypeScript compartilhadas para o **Ignite Design System** monorepo. Ele oferece configurações base para diferentes tipos de projetos (e.g., aplicações React, bibliotecas).

## 🚀 Instalação

Instale este pacote como uma `devDependency` em seus projetos que precisam das configurações de TypeScript:

```bash
npm install @beryl-ui/ts-config --save-dev
# ou
yarn add @beryl-ui/ts-config --dev
# ou
pnpm add @beryl-ui/ts-config --save-dev
```

## ⚙️ Uso

Para usar as configurações, estenda o arquivo JSON apropriado em seu `tsconfig.json`.

### Configuração Base

Para uma configuração TypeScript geral:

```json
// tsconfig.json
{
  "extends": "@beryl-ui/ts-config/base.json",
  "include": ["src"],
  "compilerOptions": {
    // Suas configurações específicas do projeto
  }
}
```

### Configuração para Projetos React

Para projetos React, que incluem configurações específicas para JSX e React:

```json
// tsconfig.json
{
  "extends": "@beryl-ui/ts-config/react.json",
  "include": ["src"],
  "compilerOptions": {
    // Suas configurações específicas do projeto React
  }
}
```

## 📄 Licença

Este pacote está sob a licença MIT. Veja o arquivo LICENSE.md na raiz do repositório para mais detalhes.