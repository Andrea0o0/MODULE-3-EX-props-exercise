import './App.css';
import Card from './components/Card'

function App() {

  const clients = [
    {
      name: 'Mr.Hoffmann',
      age: 52,
      isPremium: false,
      country: 'de',
    },
    {
      name: 'Ms. Smith',
      age: 23,
      isPremium: true,
      country: 'en',
    },
    {
      name: 'Amélie',
      age: 25,
      isPremium: false,
      country: 'fr',
    },
    {
      name: 'Paco paquito...',
      age: 67,
      isPremium: true,
      country: 'es',
    },
  ]

  return (
    <div className="App">
      <h1>Hotel webpage</h1>
      <Card clients={clients[0]}>{clients[0].name}</Card>
      <Card clients={clients[1]}>{clients[1].name}</Card>
      <Card clients={clients[2]}>{clients[2].name}</Card>
      <Card clients={clients[3]}>{clients[3].name}</Card>
    </div>
  );
}

export default App;
