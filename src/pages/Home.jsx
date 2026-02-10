import VehicleCard from '../components/VehicleCard'

function Home() {
  const vehicles = [
    {
      name: "Tesla Model 3",
      type: "Electric",
      price: "$45,000",
      status: "Available"
    },
    {
      name: "Toyota Camry",
      type: "Hybrid",
      price: "$28,000",
      status: "Sold out"
    },
    {
      name: "BMW i3",
      type: "Disel",
      price: "$60,000",
      status: "Coming soon"
    }
  ];  
  const isAdmin = false;

  return (
    <div className='cards'>
      {vehicles.map((vehicle, index) => (
        <VehicleCard
          key={index}
          name={vehicle.name}
          type={vehicle.type}
          price={vehicle.price}
          status={vehicle.status}
        />
      ))}
    </div>
  );
}

export default Home