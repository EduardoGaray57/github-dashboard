import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        if (username.trim()) {
            navigate(`/user/${username}`)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch()
    }

    return(
        <div style={styles.container}>
            <h1 style={styles.title}>GitHub Stats</h1>
            <p style={styles.subtitle}>Buscar las estadísticas de cualquier usuario</p>
            <div style={styles.searchBox}>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="Ingresa un usuario de GitHub..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button style={styles.button} onClick={handleSearch}>
                    Buscar
                </button>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#0d1117',
        color: '#ffffff'
    },
    title: {
        fontSize: '3rem',
        marginBottom: '0.5rem'
    },
    subtitle: {
        fontSize: '1.1rem',
        color: '#8b949e',
        marginBottom: '2rem'
    },
    searchBox: {
        display: 'flex',
        gap: '0.5rem'
    },
    input: {
        padding: '0.75rem 1rem',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #30363d',
        backgroundColor: '#161b22',
        color: '#ffffff',
        width: '300px'
    },
    button: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#238636',
        color: '#ffffff',
        cursor: 'pointer'
    }
}

export default Home