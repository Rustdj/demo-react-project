import './App.css';
import { BlockContent } from './components/BlockContent/BlockContent';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    
    <div className="App">
      <Header />
      <main>
        <BlockContent />
      </main>
      
      <Footer year={new Date().getFullYear()} />
    </div>
    
    
  );
}

export default App;
