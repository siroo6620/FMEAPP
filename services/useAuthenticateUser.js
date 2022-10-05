import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authSelectors, authActions } from '../store/reducers/authSlice'
import { getProfile } from '../requests/auth'
import { ShowToast } from './toastConfig'
import * as SplashScreen from 'expo-splash-screen';

export default function useAuthenticateUser () {
  const [isAuthenticatingComplete, setIsAuthenticatingComplete] = useState(false)
  const authUser = useSelector(authSelectors.selectAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    const authenticateUser = async () => {
      if (authUser.loggedIn) {
        getProfile()
          .then(res => {
            console.log(res.data)
            if (res.data.code == 200 && res.data.success) {

              dispatch(authActions.setUser(res.data.data))
            } else {
              dispatch(authActions.logout())
            }
          })
          .catch(err => {
            console.log(err.response)
            if (err.response?.status == 401) {
              dispatch(authActions.logout())
            }
          })
          .finally(async () => {
            setIsAuthenticatingComplete(true)
            await SplashScreen.hideAsync()
          })
      } else {
        dispatch(authActions.logout())
        await SplashScreen.hideAsync()
        setIsAuthenticatingComplete(true)
      }
    }
    authenticateUser()
  }, [])

  return isAuthenticatingComplete
}