# @beryl-ui/docs

<p align="center">
  <a href="https://www.npmjs.com/package/@beryl-ui/docs">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@beryl-ui/docs?color=8257E5&label=%40robson16%2Fdocs">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/Robson16/ignite-design-system?color=8257E5">
</p>

Este pacote contém a documentação do **Ignite Design System**, construída com [Storybook](https://storybook.js.org/). Ele serve como um ambiente de desenvolvimento visual e uma vitrine interativa para todos os componentes do `@beryl-ui/react`.

> A documentação pode ser visualizada online em: **robson16.github.io/ignite-design-system**

## 💻 Desenvolvimento Local

Para executar o Storybook localmente, siga os passos abaixo a partir da raiz do monorepo.

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o ambiente de desenvolvimento:**
    Este comando utiliza o Turborepo para iniciar o Storybook e os pacotes necessários em modo de observação (`watch`).
    ```bash
    npm run dev
    ```
    O Storybook estará disponível em `http://localhost:6006`.

## 🛠️ Scripts Úteis

Dentro deste pacote (`packages/docs`), você pode executar os seguintes scripts:

*   **`npm run dev`**: Inicia o Storybook em modo de desenvolvimento.
*   **`npm run build`**: Gera uma build estática do Storybook na pasta `storybook-static`.
*   **`npm run deploy-storybook`**: Faz o build do Storybook e o publica no GitHub Pages.
*   **`npm run lint`**: Executa o ESLint para verificar a qualidade do código da documentação.

## ✍️ Como Contribuir

Para adicionar ou atualizar a documentação de um componente:

1.  **Crie um arquivo de história**: Para um componente chamado `MyComponent`, crie um arquivo `MyComponent.stories.tsx` dentro da pasta `src/stories`.
2.  **Escreva as histórias**: Utilize o formato Component Story Format (CSF) para definir diferentes estados e variações do seu componente.
3.  **Adicione documentação MDX (opcional)**: Para uma documentação mais rica, você pode criar um arquivo `MyComponent.mdx` e associá-lo à sua história para fornecer descrições detalhadas, exemplos de uso e props tables.

## 📄 Licença

Este pacote está sob a licença MIT. Veja o arquivo LICENSE.md na raiz do repositório para mais detalhes.