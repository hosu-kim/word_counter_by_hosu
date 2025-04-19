import './App.css'
import WordCounter from './components/WordCounter';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Word and Sentence Counter</h1>
      </header>
      <main>
        <WordCounter />
      </main>
      <footer>
        <p>Created by hosu-kim on Github • {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App
