# Super Hero Squad

Site estático sobre as origens dos maiores heróis da Marvel e da DC, com fichas
interativas e um quiz de 10 perguntas. Feito com HTML, CSS e JavaScript puros —
sem framework, sem build, sem dependência.

## O que tem aqui

- **16 heróis** (8 Marvel, 8 DC) em painéis de gibi, com resumo, origem, poderes,
  primeira aparição, base e equipe
- **Filtro por universo** (Todos / Marvel / DC) e **busca** por nome ou identidade civil
- **Ficha completa** em modal, com fechamento por `Esc`, clique fora e botão
- **Quiz de recrutamento**: uma pergunta por vez, retorno imediato com explicação,
  medidor de progresso e patente final
- Responsivo, com foco visível no teclado e respeito a `prefers-reduced-motion`

## Estrutura

```
SuperHeroSquad/
├── index.html      → estrutura da página
├── style.css       → estilos e identidade visual
├── script.js       → dados dos heróis, filtros, ficha e quiz
└── README.md
```

## Como rodar

Abra o `index.html` no navegador. Só isso.

Se quiser servir localmente:

```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```

## Como usar suas próprias imagens

A arte dos cards é gerada em CSS (selo de iniciais impresso em três chapas de tinta
fora de registro). Para trocar por uma imagem, crie uma pasta `imagens/` e preencha
o campo `imagem` do herói em `script.js`:

```js
{
  nome: "Homem-Aranha",
  imagem: "imagens/homem-aranha.jpg",   // antes estava ""
  ...
}
```

O card detecta o campo preenchido e troca o selo pela imagem automaticamente.
Use imagens que você tenha direito de publicar — arte oficial da Marvel e da DC é
licenciada.

## Como adicionar um herói

Adicione um objeto ao array `HEROIS` em `script.js`. Todos os campos são usados:

```js
{
  nome: "Nome do herói",
  iniciais: "NH",            // 2 letras do selo
  identidade: "Nome civil",
  universo: "Marvel",        // ou "DC"
  cor: "#D6202B",            // cor de fundo do painel
  imagem: "",
  resumo: "Uma frase para o card.",
  origem: "Parágrafo com a origem.",
  poderes: ["Poder 1", "Poder 2"],
  estreia: "Título #1 (ano)",
  base: "Cidade",
  equipe: "Equipe"
}
```

Para adicionar perguntas ao quiz, use o array `PERGUNTAS` no mesmo arquivo
(`certa` é o índice da alternativa correta, começando em 0).

## Publicar no GitHub Pages

Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
O site fica no ar em `https://SEU-USUARIO.github.io/SuperHeroSquad/`.

## Aviso

Marvel e DC são marcas de seus respectivos detentores. Projeto acadêmico,
sem fins comerciais e sem vínculo com as editoras.
