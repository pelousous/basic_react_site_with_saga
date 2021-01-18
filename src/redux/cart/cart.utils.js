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