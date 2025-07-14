import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';

function Homepage() {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Nav />
      <Home />
    </div>
  );
}

export default Homepage;
