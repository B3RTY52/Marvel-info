import AppHeader from "../appHeader/appHeader";

import decoration from "../../resources/img/vision.png";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <img className="bg-decoration" src={decoration} alt="vision" />
    </div>

  );
}

export default App;
