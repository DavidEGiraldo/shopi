import React, { useEffect, useState } from 'react'

const useLocalStorage = (loggedInItem, accountItem) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [account, setAccount] = useState({})

  useEffect(() => {
    try {
      const localStorageLoggedIn = localStorage.getItem(loggedInItem)
      const localStorageAccount = localStorage.getItem(accountItem)
  
      if (localStorageLoggedIn) setLoggedIn(JSON.parse(localStorageLoggedIn))
      if (localStorageAccount) setAccount(JSON.parse(localStorageAccount))
      
    } catch (error) {
      console.error(error)
    }
  }, [])

  const signUp = (account) => {
    localStorage.setItem(accountItem, JSON.stringify(account))
    setAccount(account)
  }

  const signIn = () => {
    localStorage.setItem(loggedInItem, true)
    setLoggedIn(true)
  }

  const signOut = () => {
    localStorage.setItem(loggedInItem, false)
    setLoggedIn(false)
  }

  return {
    loggedIn,
    account,
    signUp,
    signIn,
    signOut,
  }
}

export default useLocalStorage