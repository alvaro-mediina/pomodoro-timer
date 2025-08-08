import { Routes, Route } from 'react-router-dom';
import Pomopage from './pages/Pomopage';
import Homepage from './pages/Homepage';
import './styles/App.css';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/Registerpage';
import { LoadingProvider } from './contexts/LoadingContext';

function App() {
  return (
    <LoadingProvider>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/pomodoro" element={<Pomopage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </LoadingProvider>
  );
}

export default App;
