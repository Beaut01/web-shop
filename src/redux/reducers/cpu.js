const initialState = {
    items: [],
    loading: true
}

const cpu = (state = initialState, action) => { 
    switch(action.type){
        case 'SET_CPU':
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: action.payload
            }
        default:
            return state 
    }
}


export default cpu