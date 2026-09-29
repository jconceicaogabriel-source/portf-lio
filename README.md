# Portfólio Pessoal | Gabriel Jesuino

Portfólio de desenvolvedor front-end para apresentar serviços e projetos e receber contatos de clientes.

**Site:** https://SEU-SITE.vercel.app

## Funcionalidades

- Seções de serviços, projetos, sobre mim e contato
- Layout responsivo, da tela do celular ao desktop
- Navegação por teclado, foco visível e link "Pular para o conteúdo"
- Formulário de contato que monta a mensagem e abre o WhatsApp
- Sem frameworks e sem etapa de build: apenas HTML, CSS e JavaScript

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid e Flexbox)
- JavaScript (vanilla)
- Hospedagem na Vercel

## Estrutura

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Como rodar localmente

Não precisa instalar nada. Baixe o projeto e abra o `index.html` no navegador.

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
```

## Como personalizar

1. **Contato:** no topo de `js/script.js`, altere `WHATSAPP` (formato `5511999999999`) e `EMAIL`.
2. **Redes sociais:** em `index.html`, troque `SEU-USUARIO` nos links de GitHub e LinkedIn.
3. **Projetos:** em `index.html`, edite os textos dentro de cada `<article class="browser">`. Para usar um print, coloque a imagem na pasta do projeto e substitua o conteúdo de `<div class="shot">` por `<img src="print.png" alt="Descrição da imagem">`.
4. **Cores e fontes:** ficam nas variáveis no início de `css/style.css` (`:root`).

## Publicação

O site é publicado na Vercel. Para publicar o seu:

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel, clique em **Add New > Project** e importe o repositório.
3. Mantenha as configurações padrão (é um site estático) e clique em **Deploy**.

A cada `git push`, a Vercel atualiza o site automaticamente.

## Projetos apresentados

- [Carga Pesada](https://carga-pesada-two.vercel.app)
- [Barbearia Estilo Livre](https://estilo-livre-barbearia.vercel.app/)

## Contato

Gabriel Jesuino da Conceição
[GitHub](https://github.com/SEU-USUARIO) · [LinkedIn](https://www.linkedin.com/in/SEU-USUARIO)
