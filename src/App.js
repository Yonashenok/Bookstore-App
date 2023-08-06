import './App.css';
import { Route, Routes } from 'react-router-dom';
import NoPageFound from './pages/NoPageFound';
import CategoriesPage from './pages/CategoriesPage';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </div>
  );
}

export default App;
