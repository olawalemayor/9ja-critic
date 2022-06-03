import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, Footer, AppBody, SocialWidget } from "./UI";

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

      <div className="hidden xl:block fixed top-[33.33%] right-0 w-[70px] max-h-max shadow-md">
        <SocialWidget />
      </div>

      <footer className="border">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
