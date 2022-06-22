import "./App.css";
import { Header, Footer, AppBody, SocialWidget } from "./UI";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      {/* Basically contains all the routing */}
      <main>
        <AppBody />
      </main>

      {/* Fixed side social widget */}
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
