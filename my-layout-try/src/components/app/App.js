import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";

import decoration from "../../resources/img/vision.png";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar />
        <div class="char__content">
          <CharList />

        </div>
      </main>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </div>

  );
}

export default App;
