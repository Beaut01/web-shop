import axios from 'axios'

export const setLoading = (payload) => ({
    type: 'SET_LOADING',
    payload,
})

export const fetchCpu = (category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADING',
        payload: true,
    })
    axios.get(`/cpu?${category !== null ? `category=${category}` : ''}`).then(({ data }) =>{
          dispatch(setCpu(data))
        })
}

export const setCpu = (items) => ({
    type: 'SET_CPU',
    payload: items,
})