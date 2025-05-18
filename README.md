# Projeto Final - Design System & UX

Este projeto se deriva da entrega final da disciplina de Design System & Ux, o objetivo é por meio da criação e implementação de um Design System funcional.

## Entregaveis
1. Design System no Figma - Segue o [link](https://www.figma.com/design/2AP52lIAU4ZBeMJMt77Clg/Fiap---Design-System?node-id=13-29&t=9BcuLXedduwEAqLE-0)

2. Aplicação ReactJS - Este repositório

## Estrutura do projeto

O projeto foi construindo utilizando o turbo repo, que é um framework que utiliza o conceito de mono repo. Para isso temos a seguinte estrutura de pastas

```shell
  .
  ├── apps
  │   └── demo-receipts - Projeto funcional utilizando os componentes utilizados
  │   └── docs - Storybook do projeto
  └── packages
      ├── ui-library
      │   └── lib - Componentes criados para serem reutilizados na aplicacao e testes unitarios
  ├── README.md
```

### Dependencias
- Ter o node na versão minima `lts/jod` ou `22.14.0`
- Ter o `pnpm` instalado na versão minima `10.10.0`

### Comandos úteis

- `pnpm build` - Build os pacotes do projeto, inclusive o link do Storybook
- `pnpm dev` - Executa todos os projetos a gera uma url acessivel para o projeto e storybook
- `pnpm lint` - Formata os arquivos
- `pnpm changeset` - Gera as alterações 
- `pnpm clean` - Remove todas as pastas`node_modules` e `dist`

### Executando o projeto

- Acessar o repositório do projeto atraves do seguinte [link](https://github.com/lucasnagaoka/fiap-design-system-ux)
- Clonar o repositório local na sua maquina e acessar a pasta clonada
- Rodar o seguinte comando `pnpm i && pnpm build && pnpm dev`
- Será disponibilizado no seu terminal duas URLs, uma do storyboook `http://localhost:6006/` e uma do projeto `http://localhost:5173`
- Para executar os testes unitarios, acessar a pasta `packages/ui-library` e rodar o comando `pnpm test`

### Integrantes
- Lucas Nagoka RM:358426 
- Marcos Paes Leme RM: 358316