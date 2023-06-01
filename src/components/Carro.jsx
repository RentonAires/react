import { useState } from "react"
import React from "react";

export default function Carro(){
    const [marca, setMarca] = useState("Ford");
    return(
        <>
            <h3>Meu Carro é um {marca + "!"}</h3>

            <p>para mudar a marca do carro</p>

            <button onClick={()=> setMarca("Chevrolet")}>Click aqui</button>

        </>

    )
}