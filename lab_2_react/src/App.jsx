import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';

function App() {
  return (

      
      <div className="bg-[#FDF7E9] flex w-[1200px] mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.05)] box-border">
        
        <Sidebar />

        <main className="pt-[80px] pr-[80px] pb-[80px] pl-[40px] box-border flex-grow">
          
          <Header />

          <div className="flex gap-[60px]">
            
            <div className="flex-[1.5]">
              <Experience />
            </div>

            <div className="flex-1">
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