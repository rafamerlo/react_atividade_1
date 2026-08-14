
## 🌸 Sobre o projeto

Este projeto foi desenvolvido em **React** para praticar a criação de listas utilizando **arrays**, objetos e o método `.map()`.

O componente `Carro` possui uma lista com **5 carros**, contendo informações como nome, modelo, marca e preço. Os dados são exibidos automaticamente na tela através do JSX.

---

## 🚗 Carros cadastrados

| 💕 Carro | 🔧 Modelo         | 🏷️ Marca  |      💰 Preço |
| -------- | ----------------- | ---------- | ------------: |
| Mustang  | GT 5.0            | Ford       | R$ 450.000,00 |
| Civic    | Touring 1.5       | Honda      | R$ 190.000,00 |
| T-Cross  | Highline 250 TSI  | Volkswagen | R$ 165.000,00 |
| Compass  | Limited 1.3 Turbo | Jeep       | R$ 180.000,00 |
| Creta    | Ultimate 2.0      | Hyundai    | R$ 170.000,00 |

---

## 🎀 Estrutura do projeto

Os carros são armazenados em um **array de objetos**:

```jsx
const carros = [
  { id: 1, nome: 'Mustang', modelo: 'GT 5.0', marca: 'Ford', preco: 450000 },
  { id: 2, nome: 'Civic', modelo: 'Touring 1.5', marca: 'Honda', preco: 190000 },
  { id: 3, nome: 'T-Cross', modelo: 'Highline 250 TSI', marca: 'Volkswagen', preco: 165000 },
  { id: 4, nome: 'Compass', modelo: 'Limited 1.3 Turbo', marca: 'Jeep', preco: 180000 },
  { id: 5, nome: 'Creta', modelo: 'Ultimate 2.0', marca: 'Hyundai', preco: 170000 }
];
```

Depois, o método `.map()` percorre todos os carros e cria um elemento `<li>` para cada um:

```jsx
{carros.map((carro) => (
  <li key={carro.id}>
    <p><strong>Nome:</strong> {carro.nome}</p>
    <p><strong>Modelo:</strong> {carro.modelo}</p>
    <p><strong>Marca:</strong> {carro.marca}</p>
    <p>
      <strong>Preço:</strong> R$ {carro.preco.toLocaleString('pt-BR', {
        minimumFractionDigits: 2
      })}
    </p>
  </li>
))}
```

---

## 🌷 Conceitos utilizados

* ⚛️ **React**
* 💻 **JavaScript**
* 📦 **Arrays**
* 🗂️ **Objetos**
* 🔄 **Método `.map()`**
* 🔑 **Propriedade `key`**
* 📝 **JSX**
* 🎨 **Estilização inline**
* 💰 **`toLocaleString()`**
* 📤 **Exportação de componentes**

---

## 💕 Funcionamento

### 1. 📋 Array de carros

Um array chamado `carros` armazena os dados dos cinco veículos. Cada carro é representado por um objeto com:

* `id` → identificador do carro
* `nome` → nome do veículo
* `modelo` → versão/modelo
* `marca` → fabricante
* `preco` → valor do veículo

### 2. 🔄 Método `.map()`

O `.map()` percorre cada objeto dentro do array e gera um novo elemento HTML para cada carro.

Isso evita precisar escrever manualmente o código de cada veículo.

### 3. 💰 Formatação do preço

O método `toLocaleString('pt-BR')` é utilizado para formatar os valores no padrão brasileiro.

Por exemplo:

`450000` → **R$ 450.000,00**

### 4. 🎨 Estilização

O componente utiliza **estilos inline** através da propriedade `style`, definindo características como:

* borda
* espaçamento interno
* bordas arredondadas
* largura máxima
* espaçamento entre os carros

---

## 🌸 Objetivo

O objetivo do exercício é aprender a trabalhar com **listas de objetos em React**, utilizando o método `.map()` para renderizar vários elementos de forma dinâmica e organizada.

---

