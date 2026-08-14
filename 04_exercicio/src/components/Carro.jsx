function Carro() {
  // Array com a lista dos 5 carros
  const carros = [
    { id: 1, nome: 'Mustang', modelo: 'GT 5.0', marca: 'Ford', preco: 450000 },
    { id: 2, nome: 'Civic', modelo: 'Touring 1.5', marca: 'Honda', preco: 190000 },
    { id: 3, nome: 'T-Cross', modelo: 'Highline 250 TSI', marca: 'Volkswagen', preco: 165000 },
    { id: 4, nome: 'Compass', modelo: 'Limited 1.3 Turbo', marca: 'Jeep', preco: 180000 },
    { id: 5, nome: 'Creta', modelo: 'Ultimate 2.0', marca: 'Hyundai', preco: 170000 }
  ];

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '500px' }}>
      <h2>Lista de Carros</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {carros.map((carro) => (
          <li key={carro.id} style={{ marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
            <p style={{ margin: '4px 0' }}><strong>Nome:</strong> {carro.nome}</p>
            <p style={{ margin: '4px 0' }}><strong>Modelo:</strong> {carro.modelo}</p>
            <p style={{ margin: '4px 0' }}><strong>Marca:</strong> {carro.marca}</p>
            <p style={{ margin: '4px 0' }}><strong>Preço:</strong> R$ {carro.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carro;