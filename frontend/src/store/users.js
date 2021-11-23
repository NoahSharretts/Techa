import {csrfFetch} from './csrf';

const GET_USERS = 'users/GET_USERS'

const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

export const allUsers = (users) => async dispatch => {
    const res = await csrfFetch(`/api/users`)
    const data = await res.json()
    dispatch(getUsers(data))
}

const initialState = {}
export default function usersReducer(state = initialState, action) {
    switch (action.type){
        case GET_USERS :
            const allUsers = {}
            Object.values(action.users).forEach((user)=> {
                allUsers[user.id] = user;
            })
            return { ...state, ...allUsers}
        default:
            return state
}
}
