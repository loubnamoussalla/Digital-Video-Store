import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import ListingPage from './Pages/Listing';
import DetailsPage from './Pages/Detailed';
import AppProvider from './Contexts/AppContext';
import Dashboard from './Pages/Dashboard';

const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    args[0] &&
    typeof args[0] === "string" &&
    args[0].includes("ResizeObserver loop")
  ) {
    return;
  }
  originalConsoleError(...args);
};




function App() {
window.addEventListener('error', e => {
  console.log(`errorrrr ${e.message}`);
  if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
    e.stopImmediatePropagation();
  }
});
  
  return (
    <AppProvider>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listings" element={<ListingPage />} />
      <Route path="/details/:type/:id" element={<DetailsPage />} />
      <Route path="/dashboard" element = {<Dashboard />} />
    </Routes>
  </Router>
  </AppProvider>
  );
}

export default App;
