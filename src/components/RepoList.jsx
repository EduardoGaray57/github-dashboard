function RepoList({ repos }) {
    return (
        <div style={{ backgroundColor: '#161b22', padding: '1.5rem', borderRadius: '12px', border: '1px solid #30363d' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ffffff' }}>Repositorios</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {repos.map(repo => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#0d1117', padding: '1rem', borderRadius: '8px', border: '1px solid #30363d', textDecoration: 'none', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                    >
                        <h4 style={{ margin: 0, color: '#58a6ff', fontSize: '1rem' }}>{repo.name}</h4>
                        {repo.description && (
                            <p style={{ margin: 0, color: '#8b949e', fontSize: '0.85rem' }}>{repo.description}</p>
                        )}
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#8b949e' }}>
                            {repo.language && <span style={{ color: '#c9d1d9' }}>{repo.language}</span>}
                            <span>⭐ {repo.stargazers_count}</span>
                            <span>🍴 {repo.forks_count}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default RepoList