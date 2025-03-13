import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from 'react-router';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
