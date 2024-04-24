const initialState = {
    profile: {},
    loading: false,
    error: null
  }
  const userReducer = (state = initialState, action)=>{
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          loading: true
        }
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          loading: false,
        }
      case 'LOGIN_FAILURE':
        return{
          ...state,
          error: action.payload
        }
      default:
    }
    return state
  }
  
  export default userReducer