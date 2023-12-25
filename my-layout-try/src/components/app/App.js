import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";

import decoration from "../../resources/img/vision.png";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar />
      </main>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </div>

  );
}

export default App;
