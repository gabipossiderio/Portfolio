import { MainContent } from "./components/mainContent";
import { Sidebar } from "./components/sidebar";
import './styles/components/app.sass'

function App() {
  return (
    <div id="portfolio">
      <h1>João Batista</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;
