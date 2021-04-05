export const addCpuToBasket = cpuObj => ({
    type: 'ADD_CPU_BASKET',
    payload: cpuObj
})

export const clearbasket = () => ({ 
    type: 'CLEAR_BASKET'
})

export const removeCpu = (id) => ({
    type: 'REMOVE_CPU_FROM_BASKET',
    payload: id
})

export const plusItem = id => ({
    type: 'PLUS_ITEM',
    payload: id
})

export const minusItem = id => ({
    type: 'MINUS_ITEM',
    payload: id
})