function UserProfile({ user }) {
    return (
        <div style={styles.container}>
            <img src={user.avatar_url} alt={user.login} style={styles.avatar} />
            <div style={styles.info}>
                <h2 style={styles.name}>{user.name || user.login}</h2>
                <p style={styles.username}>@{user.login}</p>
                {user.bio && <p style={styles.bio}>{user.bio}</p>}
                <div style={styles.stat}>
                    <div style={styles.stat}>
                        <span style={styles.statNumber}>{user.public_repos}</span>
                        <span style={styles.statLabel}>Repositorios</span>
                    </div>
                    <div style={styles.stat}>
                        <span style={styles.statNumber}>{user.followers}</span>
                        <span style={styles.statLabel}>Seguidores</span>
                    </div>
                    <div style={styles.stat}>
                        <span style={styles.statNumber}>{user.following}</span>
                        <span style={styles.statLabel}>Siguiendo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        backgroundColor: '#161b22',
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        border: '1px solid #30363d'
    },
    avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%'
    },
    info: {
        flex: 1
    },
    name: {
        fontSize: '1.5rem',
        margin: '0 0 0.25rem 0'
    },
    username: {
        color: '#8b949e',
        margin: '0 0 0.5rem 0'
    },
    bio: {
        color: '#c9d1d9',
        margin: '0 0 1rem 0'
    },
    stats: {
        display: 'flex',
        gap: '2rem'
    },
    stat: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    statNumber: {
        fontSize: '1.25rem',
        fontWeight: 'bold'
    },
    statLabel: {
        fontSize: '0.85rem',
        color: '#8b949e'
    }
}

export default UserProfile