import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import _header from "./partials/_header";
import Index from "./pages/index"
function App() {
  return (
    <div className="App">
      <_header />
      <br/>
      <Index />
    </div>
  );
}

export default App;
