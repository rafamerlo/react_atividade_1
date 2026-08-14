
## 🌸 Sobre o projeto

Este projeto foi desenvolvido em **React** para praticar a criação de componentes e a utilização de variáveis dentro do **JSX**.

O componente `Pessoa` armazena informações básicas de uma pessoa e exibe esses dados na tela de forma organizada.

---

## 🎀 Informações da pessoa

| 💕 Informação | 📝 Dado      |
| ------------- | ------------ |
| Nome          | Rafaela      |
| Idade         | 17           |
| Cidade        | São Paulo    |
| Bairro        | Vila Tolstoi |

---

## 💻 Estrutura do código

```jsx
function Pessoa() {
  // Declaração de variáveis
  const nome = "Rafaela";
  const idade = "17";
  const cidade = "São Paulo";
  const bairro = "Vila Tolstoi";

  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Cidade: {cidade}</p>
      <p>Bairro: {bairro}</p>
      <br />
    </div>
  );
}

export default Pessoa;
```

---

## 🌷 Conceitos utilizados

* ⚛️ **React**
* 💻 **JavaScript**
* 🧩 **Componentes**
* 📦 **Constantes com `const`**
* 📝 **JSX**
* 🔗 **Interpolação de variáveis**
* 🏷️ **Elementos HTML (`div`, `p` e `br`)**
* 📤 **Exportação de componentes**

---

## 💕 Funcionamento

O componente `Pessoa` começa declarando quatro constantes:

* `nome` → nome da pessoa
* `idade` → idade
* `cidade` → cidade onde mora
* `bairro` → bairro onde mora

Depois, essas variáveis são utilizadas dentro do JSX através das **chaves `{ }`**, permitindo que seus valores sejam exibidos na página.

Por fim, o comando `export default Pessoa` permite que o componente seja importado e utilizado em outros arquivos do projeto.

---

## 🌸 Objetivo

O objetivo do exercício é praticar a criação de **componentes React**, a declaração de variáveis e a utilização dessas informações dentro do **JSX**.

---
