
# Projeto: Meu App de Estudo (Flashcards com Revisão)

Olá\! Este é um pequeno site que criei para funcionar como um sistema de "flashcards" interativo.

O motivo foi bem pessoal: **fiz esse site de perguntas, para me auxiliar nos estudos para o exame de batismo.**

A ideia era ter uma ferramenta que me ajudasse a praticar ativamente, forçando meu cérebro a *lembrar* da resposta antes de vê-la, em vez de apenas ler passivamente.

## O que ele faz?

A lógica principal do aplicativo é a mesma, independente do visual:

  * **Estudo Ativo:** Você vê uma pergunta e um campo para digitar sua própria resposta.
  * **Autoavaliação:** Após digitar, você clica em "Mostrar Resposta" e pode se avaliar honestamente, clicando em "Acertou" ou "Errou".
  * **Revisão Inteligente:** Esta é a parte principal. O app guarda todas as perguntas que você marcou como "Errou" e, no final da rodada, inicia um "Modo de Revisão" focado **apenas nelas**.
  * **Ciclo Contínuo:** O modo de revisão se repete até você acertar todas as perguntas. Quando isso acontece, o ciclo completo recomeça com todas as perguntas embaralhadas.

-----

## 🎨 Múltiplos Temas\!

O que começou como um projeto simples acabou virando um "parque de diversões" de CSS. Para praticar design e me divertir, eu criei várias aparências completamente diferentes para o mesmo aplicativo.

Como cada tema usa arquivos `style.css` (e às vezes `index.html`) totalmente diferentes, eu decidi salvar cada um em sua própria **branch** no Git.

**Para ver os temas, basta navegar pelas branches deste repositório\!**

### Temas Disponíveis:

  * **`main` (ou `tema-minimalista`)**

      * Um tema claro, limpo e moderno, com umas sombras suaves e detalhes de cor.

  * **`tema-neon-noir`**

      * Um modo escuro elegante, inspirado em *synthwave*, com fundo roxo/azul e destaques em neon (magenta, ciano, verde).

  * **`tema-terminal` (ou `Hacker`)**

      * Uma interface "cyberpunk" que simula um terminal antigo, com fundo preto e texto verde neon brilhante.

  * **`tema-pergaminho` (ou `Manuscrito`)**

      * Um visual de papiro ou manuscrito antigo, com fontes clássicas e cores sépia, simulando uma mesa de madeira.

  * **`tema-cartas` (ou `Flip-Card`)**

      * Um design que simula cartas físicas (como Magic ou Yu-Gi-Oh\!) que "viram" no eixo Y para revelar a resposta no verso.

*(Provavelmente haverá mais no futuro\!)*

-----

## 🚀 Como Usar

1.  Clone o repositório para sua máquina:
    ```bash
    git clone https://github.com/devjaum/estudo-batismo.git
    ```
2.  Entre na pasta do projeto:
    ```bash
    cd estudo-batismo
    ```
3.  **Escolha o tema (branch) que você quer ver:**
    ```bash
    git checkout nome-da-branch-do-tema 
    # Ex: git checkout Tema-Neon
    ```
4.  Pronto\! Agora basta abrir o arquivo `index.html` no seu navegador.

-----

## ✏️ Como Adicionar Suas Próprias Perguntas

A melhor parte é que a lógica é a mesma em **todas** as branches.

1.  Abra o arquivo `script.js` em qualquer branch.

2.  Logo no topo, você encontrará o array `quizData`.

3.  Basta editar, adicionar ou remover objetos dentro deste array para alterar o conteúdo do quiz:

    ```javascript
    const quizData = [
        {
            question: "Sua nova pergunta aqui?",
            answer: "Sua nova resposta aqui."
        },
        // ... adicione quantas quiser
    ];
    ```

    **Dica:** Você pode copiar seu `quizData` personalizado e colá-lo no `script.js` de qualquer outra branch de tema sem problemas.

-----

## 🛠️ Tecnologias

  * **HTML5** (para a estrutura)
  * **CSS3** (para toda a mágica visual e os temas\!)
  * **JavaScript (ES6+)** (para a lógica de revisão, aleatoriedade e controle do estado)
