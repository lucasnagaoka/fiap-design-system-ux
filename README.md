# Projeto Final - Design System & UX

Este projeto corresponde à entrega final da disciplina Design System & UX, com o objetivo de criar um Design System funcional e uma aplicação de demonstração dos componentes (seguindo protótipo do Figma).

## Entregáveis
1. Design System no Figma - Segue o [link](https://www.figma.com/design/2AP52lIAU4ZBeMJMt77Clg/Fiap---Design-System?node-id=0-1&t=9BcuLXedduwEAqLE-1)

2. Aplicação ReactJS - Este repositório

## Estrutura do projeto

O projeto foi construído utilizando o Turborepo, que aplica o conceito de monorepo. Para isso temos a seguinte estrutura de pastas:

```shell
  .
  ├── apps
  │   └── demo-receipts - Projeto funcional de demonstração, utilizando os componentes utilizados
  │   └── docs - Storybook do projeto
  └── packages
      ├── ui-library
      │   └── lib - Biblioteca de componentes para ser instalada pelas aplicações (com testes unitários)
  ├── README.md
```

### Dependências
- Ter o node na versão minima `lts/jod` ou `22.14.0`
- Ter o `pnpm` instalado na versão minima `10.10.0`

### Comandos úteis

Considere a execução dos comandos abaixo na raiz do projeto:
- `pnpm build` - Faz o build de todos os projetos (App demo, Storybook, Biblioteca de compoentes)
- `pnpm dev` - Executa todos os projetos a gera uma url acessível para o app demo e storybook
- `pnpm lint` - Lint + Formatação dos arquivos
- `pnpm changeset` - Gerencia versões e gera changelogs 
- `pnpm clean` - Remove todas as pastas `node_modules` e `dist`

Obs.: os comandos podem ser executados individualmente a partir da pasta de cada projeto também.

### Executando o projeto

- Acessar o repositório do projeto através do seguinte [link](https://github.com/lucasnagaoka/fiap-design-system-ux)
- Clonar o repositório local na sua máquina e acessar a pasta clonada
- Rodar o seguinte comando `pnpm i && pnpm build && pnpm dev`
- Será disponibilizado no seu terminal duas URLs, uma do storyboook `http://localhost:6006/` e uma do projeto `http://localhost:5173`
- Para executar os testes unitarios, acessar a pasta `packages/ui-library` e rodar o comando `pnpm test`

Obs.: É mandatório que o `pnpm build` seja executado na pasta `packages/ui-library` para que a biblioteca de componentes esteja disponível para os projetos do App demo e do Storybook.

### Integrantes
- Lucas Nagoka RM:358426 
- Marcos Paes Leme RM: 358316