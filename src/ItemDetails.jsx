import React, { useState, useEffect } from 'react';


const ItemDetails = ({match}) => {
    const [item, setItem] = useState({});

    const showItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        const item = await fetchItem.json();
        setItem(item.data.item);
        console.log(item.data.item)
    }

    useEffect(() => {
        showItem();
        console.log(match);
    }, [])

    return (
        <div>
            <h2>{item.name}</h2>
            
        </div>
    )
}

export default ItemDetails
