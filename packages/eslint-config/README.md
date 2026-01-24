# @beryl-ui/eslint-config

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
  <img alt="Build" src="https://img.shields.io/github/actions/workflow/status/Robson16/beryl-ui/deploy-docs.yml?branch=main&color=10B981&label=build">
</p>

Configuração compartilhada de ESLint para o monorepo **beryl-ui**. Estabelece padrões consistentes de qualidade de código e detecção de problemas em potencial em todos os pacotes do sistema.

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