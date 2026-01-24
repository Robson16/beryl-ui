# Beryl UI

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/react">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/react?color=10B981&label=%40beryl-ui%2Freact">
  </a>
  <img alt="Build" src="https://img.shields.io/github/actions/workflow/status/Robson16/beryl-ui/deploy-docs.yml?branch=main&color=10B981&label=build">
  <img alt="License" src="https://img.shields.io/github/license/Robson16/beryl-ui?color=10B981&label=license">
</p>

<p align="center">
  Sistema de design robusto e profissional para aplicações React. Uma biblioteca completa de componentes reutilizáveis e bem-documentados.
</p>

<p align="center">
  <a href="#-componentes">Componentes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-desenvolvimento-local">Desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

> **Documentação:** Visualize todos os componentes e sua documentação completa em nosso [**Storybook online**](https://robson16.github.io/beryl-ui/).

## ✨ Componentes

Lista de componentes que foram desenvolvidos e estão prontos para uso:

- [x] **Avatar**: Imagem de exibição com fallback.
- [x] **Button**: Botão para ações diversas com variantes.
- [x] **Checkbox**: Caixa de seleção.
- [x] **Heading**: Título para seções.
- [x] **MultiStep**: Indicador de progresso para formulários de múltiplos passos.
- [x] **Text**: Componente para textos em geral.
- [x] **TextArea**: Campo de texto de múltiplas linhas.
- [x] **TextInput**: Campo de entrada de texto.

## 🚀 Começando

Para utilizar os componentes do **beryl-ui** em seu projeto, siga os passos abaixo.

### Instalação

Você precisará instalar o pacote principal e suas dependências `peer` (`react`, `react-dom` e `styled-components`).

```bash
npm install @beryl-ui/react styled-components
# ou
yarn add @beryl-ui/react styled-components
# ou
pnpm add @beryl-ui/react styled-components
```

### Configuração

Para que os componentes funcionem corretamente com o tema padrão, você precisa envolver sua aplicação com o `ThemeProvider` do `styled-components`.

```tsx
// Em seu arquivo principal (ex: App.tsx)
import { globalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@beryl-ui/react/styles' // Ajuste o caminho se necessário

globalStyles()

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* ... seu código e rotas ... */}
    </ThemeProvider>
  )
}
```

## 💻 Desenvolvimento Local

Se você deseja contribuir para o projeto, siga estas instruções para configurar o ambiente de desenvolvimento.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Robson16/beryl-ui.git
    cd beryl-ui
    ```

2.  **Instale as dependências:**
    Este é um monorepo configurado com workspaces. Use o NPM para instalar as dependências de todos os pacotes.
    ```bash
    npm install
    ```

3.  **Execute o ambiente de desenvolvimento:**
    Este projeto usa **Turborepo** para gerenciar os scripts do monorepo. Para iniciar o Storybook e os pacotes em modo de desenvolvimento, execute:
    ```bash
    npm run dev
    ```
    > Este comando executará o script `dev` de todos os pacotes em paralelo, permitindo que você visualize os componentes no Storybook e faça alterações no código-fonte.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE.md para mais detalhes.