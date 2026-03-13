function UserProfile({ user }) {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            alignItems: 'center',
            backgroundColor: '#161b22',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            border: '1px solid #30363d'
        }}>
            <img
                src={user.avatar_url}
                alt={user.login}
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
            <div style={{ flex: 1, minWidth: '200px' }}>
                <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.25rem 0' }}>
                    {user.name || user.login}
                </h2>
                <p style={{ color: '#8b949e', margin: '0 0 0.5rem 0' }}>@{user.login}</p>
                {user.bio && (
                    <p style={{ color: '#c9d1d9', margin: '0 0 1rem 0' }}>{user.bio}</p>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{user.public_repos}</span>
                        <span style={{ fontSize: '0.85rem', color: '#8b949e' }}>Repositorios</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{user.followers}</span>
                        <span style={{ fontSize: '0.85rem', color: '#8b949e' }}>Seguidores</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{user.following}</span>
                        <span style={{ fontSize: '0.85rem', color: '#8b949e' }}>Siguiendo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile