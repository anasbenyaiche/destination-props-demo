import "./App.css";
import Card from "./components/Card";
import { destinations } from "./constant/destinations";

function App() {
  const handleBooking = (title) => alert(`you book ${title}`);

  return (
    <div className="App">
      <header className="App-header">
        {destinations.map((destination, index) => (
          <div className="card-container" key={index}>
            <Card
              destination={destination}
              onClick={() => handleBooking(destination.title)}
            />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
