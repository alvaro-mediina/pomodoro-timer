import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';

function Homepage() {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-background">
      <Nav />
      <Home />
    </div>
  );
}

export default Homepage;
