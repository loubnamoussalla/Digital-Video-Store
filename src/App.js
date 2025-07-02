import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import ListingPage from './Pages/Listing';
import DetailsPage from './Pages/Detailed';
import AppProvider from './Contexts/AppContext';

function App() {
  return (
    <AppProvider>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listings" element={<ListingPage />} />
      <Route path="/details/:type/:id" element={<DetailsPage />} />
    </Routes>
  </Router>
  </AppProvider>
  );
}

export default App;
