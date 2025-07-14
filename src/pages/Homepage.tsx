import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import Footer from '@/components/FooterHome/Footer'
function Homepage() {
  return (
    <div className="h-screen flex flex-col bg-background  ">
      <Nav />
      <div className="flex flex-col grow">
        <div className="flex-1 flex justify-center">
          <Home />
        </div>
        <div className="flex-1">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
