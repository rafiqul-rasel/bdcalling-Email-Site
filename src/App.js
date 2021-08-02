import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./partials/_header";
import Index from "./pages/index"
import Footer from "./partials/_footer";
function App() {
  return (
    <div className="App">
      <Header />
      <br/>
      <Index />
      <br/>
      <Footer />
    </div>
  );
}

export default App;
