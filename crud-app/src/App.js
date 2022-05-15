import AllStock from './Component/AllStock';
import AddStock from './Component/AddStock';
import EditStock from './Component/EditStock';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AddStock /> } />
        <Route path="all" element={<AllStock /> } />
        <Route path="/add" element={<AddStock />} />
        <Route path="/edit/:id" element={<EditStock />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
