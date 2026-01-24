# @beryl-ui/tokens

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/tokens">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/tokens?color=8257E5&label=%40robson16%2Ftokens">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/Robson16/ignite-design-system?color=8257E5">
</p>

Este pacote contém os design tokens (cores, espaçamentos, tipografia, tamanhos de fonte, etc.) que definem a identidade visual do **Ignite Design System**. Eles são a fonte da verdade para todos os valores de design.

## ✨ Tokens Incluídos

*   **Cores**: Paleta de cores primárias, secundárias, neutras, etc.
*   **Espaçamentos**: Valores para margens, paddings e gaps.
*   **Tipografia**: Famílias de fontes, tamanhos, pesos e alturas de linha.
*   **Bordas**: Raio de borda (border-radius).
*   **Fontes**: Famílias de fontes.
*   **Line Heights**: Alturas de linha.
*   **Font Sizes**: Tamanhos de fonte.

## 🚀 Instalação

Instale este pacote em seus projetos que precisam acessar os valores de design:

```bash
npm install @beryl-ui/tokens
# ou
yarn add @beryl-ui/tokens
# ou
pnpm add @beryl-ui/tokens
```

## ⚙️ Uso

Você pode importar e usar os tokens diretamente em seu código JavaScript/TypeScript, especialmente útil com bibliotecas de CSS-in-JS como `styled-components`.

```javascript
// Exemplo de uso em um arquivo JavaScript/TypeScript
import { colors, fontSizes, space } from '@beryl-ui/tokens'

console.log(colors.gray800) // #202024
console.log(fontSizes.md)   // 1rem
console.log(space[4])       // 1rem
```

## 📄 Licença

Este pacote está sob a licença MIT. Veja o arquivo LICENSE.md na raiz do repositório para mais detalhes.