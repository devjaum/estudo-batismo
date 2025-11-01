

# Projeto Quiz de Estudo

Olá\! Este é um pequeno site que criei para funcionar como um sistema de "flashcards" interativo.

O motivo foi bem pessoal: **fiz esse site de perguntas, para me auxiliar nos estudos para o exame de batismo.**

A ideia era ter uma ferramenta que me ajudasse a praticar ativamente, forçando meu cérebro a *lembrar* da resposta antes de vê-la, em vez de apenas ler passivamente.

-----

## Como funciona?

O fluxo de estudo é bem simples, mas é focado em revisar o que você mais erra:

1.  O sistema mostra uma pergunta de cada vez, e elas sempre aparecem em ordem aleatória.
2.  Existe um campo de texto para você digitar sua própria resposta, o que ajuda a exercitar a memória.
3.  Depois de tentar, você clica em "Mostrar Resposta" e pode comparar o que escreveu com a resposta correta.
4.  Em seguida, você precisa se autoavaliar: você "Acertou" ou "Errou"?
5.  **E aqui está a parte principal:** Se você clicar em "Errado", o sistema guarda essa pergunta.
6.  Quando você passar por todas as perguntas, ele inicia automaticamente um "Modo de Revisão", mostrando **apenas** as perguntas que você errou.
7.  Esse modo de revisão continua rodando até você acertar todas elas. Quando isso acontece, o ciclo completo começa de novo, com todas as perguntas embaralhadas.

-----

## Como usar

Você pode simplesmente baixar os três arquivos (`index.html`, `style.css` e `script.js`) para a mesma pasta no seu computador e abrir o `index.html` em qualquer navegador.

Se quiser subir para o seu GitHub, pode usar o GitHub Pages para ter um link e acessar pelo celular ou de qualquer lugar.

-----

## Como adicionar suas próprias perguntas

O projeto foi feito para ser muito fácil de adaptar. Todas as perguntas e respostas estão guardadas em um único lugar, no topo do arquivo `script.js`.

Para mudar o conteúdo, basta abrir o `script.js` e editar o array chamado `quizData`:

```javascript
// 1. DADOS: Suas perguntas e respostas
const quizData = [
    {
        question: "Aqui vai a sua nova pergunta.",
        answer: "Aqui vai a resposta correta para ela."
    },
    {
        question: "Outra pergunta?",
        answer: "E aqui a outra resposta."
    }
    // ... basta adicionar quantos objetos quiser
];
```

-----

## Tecnologias

Este é um projeto bem direto, feito apenas com a base do front-end:

  * **HTML5** (para a estrutura)
  * **CSS3** (para a aparência)
  * **JavaScript (ES6+)** (para toda a lógica de embaralhar, mostrar/esconder e controlar o modo de revisão)
