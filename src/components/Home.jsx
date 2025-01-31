import React from 'react'
import FeaturedItemms from './FeaturedItemms'
import Categories from './Categories'

export default function Home() {
    return (
        <>
            <h1 className="text-4xl">
                Learn, Cook, Eat Your Food</h1>
            <Categories />
            <FeaturedItemms />
        </>

    )
}
