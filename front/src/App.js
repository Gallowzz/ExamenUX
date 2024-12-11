import './App.css';

function App() {
  return (
    <div>
      <h1>Lista Restaurantes</h1>
      <Restaurants />
    </div>
  );
}


function Restaurants() {
  const restaurantes = [
    {name: "La Casca", descripcion: "Consumo en el lugar · Terraza o mesas al aire libre · Retiro desde el coche"},
    {name: "Portal de las carnes", descripcion: "Disfrute de las mejores carnes y vinos en un ambiente único de la ciudad de San Pedro Sula."},
    {name: "Factory Steak & Lobster", descripcion: "Experience the best steak and lobster in San Pedro Sula at Factory Steak and Lobster"},
  ]

  const mapping = restaurantes.map((rest) => (
    <RestaurantCard name={rest.name} desc={rest.descripcion} />
  ))

  return mapping;
}

function RestaurantCard({name, desc}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{desc}</p>
      <button>Ver Disponibilidad</button>
    </div>
  )
}

export default App;
