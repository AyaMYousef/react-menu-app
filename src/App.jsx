import { useState } from 'react';
import './App.css';
import './style.scss';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Layout from './components/Layout';
import MealDetails from './components/MealDetails';
import Categories from './components/Categories';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DisplayCategory from './components/DisplayCategory';

function App() {

  let routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/mealdetails/:idMeal', element: <MealDetails /> },


      ]
    }
  ]);

  return (

    <RouterProvider router={routes} />
  );
}

export default App;
