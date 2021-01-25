export const addItemToArray = (items, item) => {
    const itemExists = items.find(it => it.id === item.id);

    if(itemExists) {
        return items.map(el => 
            el.id === item.id  
                ? {...el, quantity: el.quantity + 1} 
                : el
        )
    }
    return [...items, {...item,quantity: 1}];
}

export const removeItemToArray = (items, item) => {
    const itemExists = items.find(el => el.id === item.id)
    
    if(itemExists.quantity === 1) {
        return items.filter(el => el.id !== item.id)
    }

    return items.map(el => (
        el.id === item.id ?
            {...el, quantity: el.quantity - 1} :
            el
    ))
}