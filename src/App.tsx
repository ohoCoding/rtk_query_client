import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
