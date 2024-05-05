import NetflixApp from "./NetflixApp";
import "./index.css";
import AuthentificationProvider from "./providers/authentificationProvider";
import QueryProvider from "./providers/queryProvider";

function App() {
  return (
    <QueryProvider>
      <AuthentificationProvider>
      <NetflixApp/>
      </AuthentificationProvider>
    </QueryProvider>
  );
}

export default App;
