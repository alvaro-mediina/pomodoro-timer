import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import { useState } from 'react';

function Homepage() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-background">
      <Nav />
      <Home isLogged={isLogged} />
    </div>
  );
}

export default Homepage;
