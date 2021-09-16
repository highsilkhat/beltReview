import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Main = (props) => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pizzas/all')
            .then(res => {
                setPizzas(res.data.results)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
        {
            pizzas.map((item, i) => {
                return <p>{item.size}</p>
            })
        }
        </>
    )
}

export default Main