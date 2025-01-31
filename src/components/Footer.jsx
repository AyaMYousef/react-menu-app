import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 space-x-3">
                    <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Recipe
                    </span>
                </a>
                <span className="text-blue-700 font-bold text-2xl">Route</span>
               
                <span className="text-sm text-gray-500   dark:text-gray-400">
                © 2025 <a href="#" className="hover:underline align-middle"></a>. All Rights Reserved.
            </span>
            </div>
            
        </>
    )
}
