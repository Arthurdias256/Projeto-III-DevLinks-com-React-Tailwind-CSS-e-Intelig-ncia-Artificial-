# DevLinks

Página responsiva de perfil e links, desenvolvida com React, TypeScript e Vite a partir das referências do projeto DevLinks.

## Funcionalidades

- Layout para telas de celular e desktop.
- Alternância entre temas claro e escuro, com preferência salva no `localStorage`.
- Imagens de fundo e avatares diferentes para cada tema.
- Botões de links e ícones de redes sociais gerados a partir de dados tipados.

> **Pendente:** os destinos dos quatro botões e dos ícones de YouTube e LinkedIn ainda não foram informados. Por isso, eles aparecem na interface, mas não abrem páginas. O nome `@seu.perfil` também é provisório.

## Tecnologias

- React e TypeScript
- Vite 8
- Tailwind CSS e CSS
- Oxlint

## Como executar

O Vite 8 requer Node.js **20.19 ou superior na linha 20**, ou **22.12 ou superior**. Após instalar uma versão compatível, na pasta do projeto execute:

```bash
npm install
npm run dev
```

Abra no navegador o endereço informado no terminal. No PowerShell, se a política de execução bloquear `npm.ps1`, use `npm.cmd` no lugar de `npm`.

### Outros comandos

```bash
npm run build    # verifica o TypeScript e gera a versão de produção em dist/
npm run lint     # verifica o código com Oxlint
npm run preview  # visualiza localmente o build gerado
```

## Personalização

Edite `src/data/index.ts` para alterar o nome do perfil e preencher as propriedades `url` dos botões e das redes sociais. Substitua cada `null` pelo endereço real; quando houver uma URL, o link abrirá em uma nova aba. Os arquivos de imagem ficam em `src/assets/`.

## Estrutura

```text
src/
├── assets/               # imagens e ícones
├── components/
│   ├── features/         # perfil, botões e redes sociais
│   └── ui/               # controle de tema
├── data/                 # dados do perfil e dos links
├── hooks/                # lógica de tema
├── App.tsx               # composição da página
├── App.css               # estilos da interface
└── index.css             # estilos globais e tokens
```

## Referências

- [Enunciado do projeto](https://deluxe-blue-bc1.notion.site/Projeto-03-DevLinks-React-com-IA-OpenCode-MCP-40ddfca74d8d81258b08ec06a260be93)
- [Interface no Figma](https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=0-1)
- [Style Guide no Figma](https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=1437-350)
- [AGENTS.md](./AGENTS.md): orientações de desenvolvimento do projeto.
