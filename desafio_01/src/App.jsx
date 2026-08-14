import './App.css'

function App() {
// Declaração de variáveis 
const nome = "Dior Addict Lip Maximizer"
const descricao = "Gloss labial com brilho intenso e efeito hidratante."
const marca = "Dior"
const preco = "R$ 249,90"

  return (
    <div>
      <h1>Produto</h1>

      <h2>{nome}</h2>
      <p>Descrição: {descricao}</p>
      <p>Marca: {marca}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
}

export default App;
