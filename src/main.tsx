import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import ViewGroups from '@src/pages/view-groups/ViewGroups.tsx';
import { TeamGenerateProvider } from '@src/providers/TeamGenerateProvider.tsx';


createRoot(document.getElementById('root')!).render(
  <TeamGenerateProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/view-groups/:id' element={<ViewGroups />} />
      </Routes>
    </BrowserRouter>
  </TeamGenerateProvider>,
)
