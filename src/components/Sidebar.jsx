import React from 'react'
import logo from '../assets/logo-BfNap0Pe.png'
export default function Sidebar() {
  return (
    <>
 

      <aside id="default-sidebar" className="  fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             
                <span className="ms-3"> <img src={logo} alt="Logo" width="200" /></span>
              </a>
            </li>
            <ul className="space-y-4 mt-6 font-medium">
                <li className="px-4 bg-primary hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all mb-6 rounded-xl text-lg shadow-lg shadow-orange-300  bg-orange-400 font-semibold text-white">
                <a className="flex items-center p-2 rounded-lg" href="#/" data-discover="true">
               <span class="flex-1 ms-3 whitespace-nowrap">Meals</span></a></li><li class="px-4 border hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all border-gray-300 rounded-xl text-lg"><a class="flex items-center p-2 rounded-lg" href="#/" data-discover="true">
          <span class="flex-1 ms-3 whitespace-nowrap">Ingredients</span></a></li><li class="px-4 border hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all border-gray-300 rounded-xl text-lg"><a class="flex items-center p-2 rounded-lg" href="#/" data-discover="true"><span class="flex-1 ms-3 whitespace-nowrap">Area</span></a></li>
            </ul>                
          </ul>
        </div>
      </aside>

   
    </>
  )
}
