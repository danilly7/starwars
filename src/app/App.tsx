import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Logic';
import { AppProviders } from '../providers';
import { AppRoutes } from '../routes';
import './App.css';

function App() {
  return (
    <AppProviders>
      <Router>
        <div className="bg-black min-h-screen text-slate-300">
          <header>
            <Navbar />
          </header>
          <main>
            <AppRoutes />
          </main>
          <footer>
            <div className="flex justify-center items-center h-16 mt-12">
              <p>© 2025 StarWars. May the Force be with you.</p>
            </div>
          </footer>
        </div>
      </Router>
    </AppProviders>
  );
}

export default App;