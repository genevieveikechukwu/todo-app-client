import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
);
