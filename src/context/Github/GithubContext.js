import {createContext,useReducer,} from 'react'
import githubReducer from './GitReducer';
const GithubContext = createContext();

export const GithubProvider =({children})=>{
const initialState ={
  users: [],
  user:{},
  repos:[],
  loading:false,
}
const [state, dispatch]= useReducer(githubReducer, initialState);

  const searchUsers = async (text)=>{
    setLoading()
    const params= new URLSearchParams({
      q:text
    })
     const response = await fetch(`https://api.github.com/search/users?${params}`);
     const {items} = await response.json();
     dispatch({
      type: 'GET_USERS',
      payload: items
     })
  }
  const setLoading =()=>{
    dispatch({
      type: 'SET_LOADING',
   
     })
     
  }
   const clearUser= ()=>{
        dispatch({
          type: 'CLEAR_USER',
        })

      }
      
  const getUser = async (login)=>{
    setLoading()
    const response = await fetch(`https://api.github.com/users/${login}`);
     if(response.status=== 422){
      window.location='/notfound'
     }else{
      const data= await response.json();
      dispatch({
       type: 'GET_USER',
       payload: data
      })
     }
     
  }
  const userRepo = async (login)=>{
    setLoading()
    const params= new URLSearchParams({
      sort: 'created',
      per_page:10,
    })
     const response = await fetch(`https://api.github.com/users?${login}/repos?${params}`);
     const data = await response.json();
     dispatch({
      type: 'GET_REPOS',
      payload: data
     })
  }
  return <GithubContext.Provider value={{
    users:state.users,
    user:state.user,
    repos:state.repos,
    loading:state.loading,
    searchUsers,
    clearUser,
    getUser,
    userRepo
  }}>
    {children}
  </GithubContext.Provider>
}
export default GithubContext;
