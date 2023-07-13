import Header from "./components/Header";
import '../src/asset/css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Content from './components/Content';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Header title="My React Application"/>      
        <Content/>
    </div>
  );
};

export default App;