import { useState } from "react";
import { getUser, getRepos } from "../services/github.js";

export const useGitHub = () => {
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const searchUser = async (username) => {
        setLoading(true)
        setError(null)
        try {
            const [userRes, reposRes] = await Promise.all([
                getUser(username),
                getRepos(username)
            ])
            setUser(userRes.data)
            setRepos(reposRes.data)            
        } catch (err) {
            setError('Usuario no encontrado')
            setUser(null)
            setRepos([])            
        }   finally {
            setLoading(false)
        }
    }
    return { user, repos, loading, error, searchUser }
}