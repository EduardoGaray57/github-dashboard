import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useGitHub } from "../hooks/useGitHub.js"
import UserProfile from "../components/UserProfile.jsx"
import RepoList from "../components/RepoList.jsx"
import LanguagesChart from "../components/LanguagesChart.jsx"

function UserDetail() {
    const {username} = useParams()
    const navigate = useNavigate()
    const { user, repos, loading, error, searchUser } = useGitHub()

    useEffect(() => {
        searchUser(username)
    }, [username])

    if (loading) return <div style={styles.center}>Cargando...</div>
    if (error) return <div style={styles.center}>{error}</div>

    return (
        <div style={styles.container}>
            <button style={styles.back} onClick={() => navigate('/')}>
                ← Volver
            </button>
            {user && <UserProfile user={user}/>}
            {repos.length > 0 && <LanguagesChart repos={repos}/>}
            {repos.length > 0 && <RepoList repos={repos}/>}
        </div>
    )
}

const styles = {
    container: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#0d1117',
        minHeight: '100vh',
        color: '#ffffff'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#0d1117',
        color: '#ffffff',
        fontSize: '1.5rem'
    },
    back: {
        padding: '0.5rem 1rem',
        backgroundColor: 'transparent',
        border: '1px solid #30363d',
        color: '#ffffff',
        borderRadius: '8px',
        cursor: 'pointer',
        marginBottom: '1.5rem'
    }
}

export default UserDetail