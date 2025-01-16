import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { AppProviders } from '../providers';
import { AppRoutes } from '../routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-slate-300">
        <header>
          <Navbar />
        </header>
        <main>
          <AppProviders>
            <AppRoutes />
          </AppProviders>
        </main>
        <footer>
          <div className="flex justify-center items-center h-16">
            <p>© 2025 StarWars. May the Force be with you.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;