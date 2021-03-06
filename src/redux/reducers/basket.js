const initialState={
    items:{},
    totalPrice:0,
    totalCount:0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.')
    return keys.reduce((val, key) => {
      return val[key]
    }, obj[firstKey])
  }
  
  const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
      const value = _get(obj, path)
      return sum + value
    }, 0)
  }

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CPU_BASKET':{
            const currentCpuItem = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentCpuItem,
                    totalPrice: getTotalPrice(currentCpuItem)
                }
            }

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')

            return{
                ...state,
                items: newItems,
                totalCount, 
                totalPrice
            }
        }
        case 'CLEAR_BASKET':
            return{
                items:{},
                totalPrice:0,
                totalCount:0
            }
        case 'REMOVE_CPU_FROM_BASKET':{
            const newItems = { 
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        case 'PLUS_ITEM':{
            const newObjItems = [ 
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]

            const newItems = {
                ...state.items,
                [action.payload]:{
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')

            return { 
                ...state, 
                items: newItems,
                totalPrice,
                totalCount
            }
        }
        case 'MINUS_ITEM':{
            const oldItems = state.items[action.payload].items
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

            const newItems = {
                ...state.items,
                [action.payload]:{
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')

            return { 
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }
        default:
            return state 
    }
}

export default basket