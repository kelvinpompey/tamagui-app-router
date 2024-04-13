import Constants, { ExecutionEnvironment } from 'expo-constants'
import { NativeToast as Toast } from './NativeToast'

const isExpo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient
console.log("isExpo ", isExpo)

export const CustomToast = () => {
  if (isExpo) {
    return null
  } else {
    return <Toast />
  }
}
