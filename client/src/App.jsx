import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, Footer, AppBody } from "./UI";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main>
        <AppBody />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
