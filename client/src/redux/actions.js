// const { REACT_APP_API_BASE_URL } = 'process.env';

export const GET_VIDEOGAMES =  'GET_VIDEOGAMES';
export const SEARCH_VIDEOGAMES =  'SEARCH_VIDEOGAMES';
export const SORT = 'SORT';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';



export const getVideogames = () => {
    return function (dispatch) {
       // fetch(`${REACT_APP_API_BASE_URL}/videogames`)
        fetch(`http://127.0.0.1:3001/api/videogames`)
        .then(res => res.json())
        .then(videogames => {
            dispatch({
                type: GET_VIDEOGAMES,
                payload: videogames
            })
        })
        .catch(error => {
            console.error(error)
        })

    }
}

export const searchVideogames = (search) => {
    return function (dispatch) {
        fetch(`http://127.0.0.1:3001/api/videogames?name=${search}`)
        .then(res => res.json())
        .then(videogames => {
            dispatch({
                type: SEARCH_VIDEOGAMES,
                payload: videogames
            })
         })
         .catch(error => {
             console.error(error)
         })
 
     }
}

export const sort = (order) => {
    return {
        type: SORT,
        payload: order,
    }
}

export const changePage = (page) => {
    console.log('page: ',page)
    return {
        type: CHANGE_PAGE,
        payload: page,
    }
}

export const getCurrentGames = () => {
    console.log('soy el get current Games')
    return {
        type: GET_CURRENT_PAGE,
        payload: '',
    }
}
