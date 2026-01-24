# @beryl-ui/react

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/react">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/react?color=10B981&label=%40beryl-ui%2Freact">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
</p>

Biblioteca de componentes React profissionais do **beryl-ui**, construídos com `styled-components` e `Radix UI` para máxima performance e acessibilidade.

## ✨ Componentes Incluídos

*   **Avatar**: Imagem de exibição com fallback.
*   **Button**: Botão para ações diversas com variantes.
*   **Checkbox**: Caixa de seleção.
*   **Heading**: Título para seções.
*   **MultiStep**: Indicador de progresso para formulários de múltiplos passos.
*   **Text**: Componente para textos em geral.
*   **TextArea**: Campo de texto de múltiplas linhas.
*   **TextInput**: Campo de entrada de texto.

> Para uma documentação interativa e exemplos de uso de cada componente, visite nosso **Storybook de documentação**.

## 🚀 Instalação

Para usar os componentes React em seu projeto, instale o pacote via npm, yarn ou pnpm:

```bash
npm install @beryl-ui/react styled-components
# ou
yarn add @beryl-ui/react styled-components
# ou
pnpm add @beryl-ui/react styled-components
```

## ⚙️ Configuração

Para que os componentes funcionem corretamente com o tema padrão, você precisa envolver sua aplicação com o `ThemeProvider` do `styled-components` e aplicar os estilos globais.

```tsx
// Em seu arquivo principal (ex: App.tsx)
import { globalStyles } from '@beryl-ui/react/styles' // Importe os estilos globais
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@beryl-ui/react/styles' // Importe o tema padrão

globalStyles() // Aplique os estilos globais

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* ... seus componentes e rotas que usarão o design system ... */}
    </ThemeProvider>
  )
}
```

## 💡 Uso Básico

Exemplo de como usar um componente `Button`:

```tsx
import { Button } from '@beryl-ui/react'

function MyComponent() {
  return (
    <Button onClick={() => alert('Clicado!')}>
      Clique aqui
    </Button>
  )
}
```

## 🛠️ Desenvolvimento Local (para contribuidores)

Se você está contribuindo para este pacote especificamente dentro do monorepo:

1.  **Navegue até a pasta do pacote:**
    ```bash
    cd packages/react
    ```
2.  **Execute o modo de desenvolvimento:**
    Para compilar o pacote em modo `watch` e ver as alterações em tempo real (geralmente usado em conjunto com o Storybook do monorepo):
    ```bash
    npm run dev
    ```
    (Este script `dev` é definido no `package.json` de `packages/react` e usa `tsup` para observar as mudanças).

## 📄 Licença

Este pacote está sob a licença MIT. Veja o arquivo LICENSE.md na raiz do repositório para mais detalhes.