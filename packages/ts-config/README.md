# @beryl-ui/ts-config

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
  <img alt="Build" src="https://img.shields.io/github/actions/workflow/status/Robson16/beryl-ui/deploy-docs.yml?branch=main&color=10B981&label=build">
</p>

Configuração compartilhada de TypeScript para o monorepo **beryl-ui**. Fornece configurações otimizadas para diferentes tipos de projetos, incluindo aplicações React e bibliotecas.

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