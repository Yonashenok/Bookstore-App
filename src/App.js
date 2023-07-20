import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="categories" element={<h1>categories</h1>} />
      </Routes>
    </div>
  );
}

export default App;
