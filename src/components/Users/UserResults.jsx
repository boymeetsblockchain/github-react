import {useContext} from 'react'
import Spinner from '../Layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/Github/GithubContext';

function UserResults() {
  const {users,loading,}= useContext(GithubContext)

  if(!loading){
    return (
      <div className='grid grid-cols-1 gap-8 xl:grids-cols-4 lg:grid-cols-3 md:grid-cols-2'>
         {users.map((user)=>(
          <h3><UserItem key={user.id} user={user}/></h3>
         ))}
      </div>
    )
  }else{
    return <>
    <Spinner/>
    </>
  }

}

export default UserResults
