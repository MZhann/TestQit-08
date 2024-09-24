import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/mainPage'
import GenerationPage from './pages/generationPage'
import PageNotFound from './pages/pageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <PageNotFound />

  },
  {
    path: '/generation',
    element: <GenerationPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
