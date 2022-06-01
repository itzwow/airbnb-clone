import React from "react"

import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import Data from "./components/Data"




export default function App() {
    const  card = Data.map(item =>{
        return (
            
            <Card
            key = {item.id}
            item = {item}
                />
        )
    })
    return (
        <div>
            
            <Navbar/>
            <Main/>
            
            <section className="cards-list">
                {card}
            </section>
             
        </div>
    )
}