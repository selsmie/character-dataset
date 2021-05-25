import {useEffect} from "react"
import {postLanguages} from "./services/services"
import languages from "./langu/languages"

function App() {

  useEffect(() => {
    postLanguages(languages)
  }, [])

  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
