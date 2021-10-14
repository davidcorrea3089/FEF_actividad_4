import React, { Fragment, useState, useEffect } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar'
import PostList from './components/PostList';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar'
import { getUserId, ThreePointsLogout } from './services/ThreePointsServices';
import { Route, Switch, useHistory } from 'react-router-dom'

function App(){

  const [search, setSearch] = useState("")
  const [currentUser, setCurrentUser] = useState()

  const history = useHistory()

  useEffect(() => {

    const userId = localStorage.getItem('userId')
    
    if(userId){
      getUserId(userId)
        .then(response => {
          setCurrentUser(response)
          history.push('/')
        })
    }else{
      history.push('/login')
    }
    
  }, [])

  function changeSearch(search){
    setSearch(search)
  }

  function LoginComplete(userData){
    setCurrentUser(userData)  
  }

  function LogoutComplete(){
     ThreePointsLogout()
       .then(response => {
         history.push('/login')
         localStorage.removeItem('userId')
         setCurrentUser()
       })
  }

  return(
    <div className="App">
      <Switch>
        <Route path="/" exact component={() => {
          return(
            <Fragment>
              <Navbar/>
              <SearchBar
                value={search}
                onSearch={(search) => changeSearch(search)}
              />
              <PostList
                search={search}
              />
            </Fragment>
          )
        }}></Route>
        <Route path="/profile" exact component={() => {
          return(
            <Fragment>
              <Navbar/>
              <Profile
                avatar={currentUser.avatar}
                username={currentUser.name}
                bio={currentUser.bio}
                onClickLogout={() => LogoutComplete()}
              />
            </Fragment>
          )
        }}>
        </Route>
        <Route path="/login" exact component={() => {
          return(
            <Login
              onLoginComplete={(userData) => LoginComplete(userData)}
            />  
          )
        }}>

        </Route>
      </Switch>
    </div>
  )

}

export default App
