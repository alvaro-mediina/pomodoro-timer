import './styles/App.css'
import Nav from "./components/Nav/Nav";
import Home from './components/Home/Home'
import Info from './components/Info/Info';
function App() {

  return (
    <div className="bg-background flex flex-col overflow-x-hidden overflow-y-auto ">
      <Nav/>
      <Home/>
      <Info/>
    </div>
  )
}

export default App
