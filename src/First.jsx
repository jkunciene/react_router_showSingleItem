import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const First = () => {
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const data = await fetch(
            'https://fortnite-api.theapinetwork.com/items/list'
        );
        const items = await data.json();
        setItems(items.data);
        console.log(items.data);
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <div>
            {
                items.map((item) => (
                   
                    <p key={item.itemId}>
                         <Link to={`/first/${item.itemId}`}>{item.item.name}</Link>
                         </p>
                    
                    
                ))
            }
        </div>
    )
}

export default First
