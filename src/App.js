import './App.css';
import Header from "./components//header/index"
import AboutMe from "./components/aboutMe/index"
import Work from "./components/work/index"
import ContactMe from "./components/contactMe/index"

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <AboutMe/>
      <Work/>
      <ContactMe/>
      </main>
    </div>
  );
}

export default App;