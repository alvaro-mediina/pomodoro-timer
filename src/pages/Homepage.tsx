import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import { useLoading } from '@/contexts/LoadingContext';
import LoadingPage from './LoadingPage';

function Homepage() {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && <LoadingPage />}
      <div className="h-screen overflow-hidden flex flex-col bg-background">
        <Nav />
        <Home />
      </div>
    </>
  );
}

export default Homepage;
