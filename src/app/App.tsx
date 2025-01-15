import { Navbar } from '../components/Navbar';
import { StarshipsList } from '../components/StarshipsList';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    // </QueryClientProvider>
    <div className="bg-black min-h-screen text-white">
      <BrowserRouter>
        <Navbar />
        <StarshipsList />
      </BrowserRouter>
    </div>
  );
}

export default App;