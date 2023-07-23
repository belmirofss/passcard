import { useContext } from "react"
import { AppContext } from "../contexts/App"

export const useAppContext = () => {
    return useContext(AppContext)
}