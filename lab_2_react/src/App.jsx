import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="grid-layout">
          <div className="left-column">
            <Experience />
          </div>
          <div className="right-column">
            <Education />
            <Skills />
            <Languages />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;