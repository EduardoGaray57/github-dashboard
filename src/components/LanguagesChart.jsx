import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#238636', '#1f6feb', '#a371f7', '#f78166', '#e3b341', '#39d353', '#58a6ff', '#ff7b72']

function LanguagesChart({ repos }) {
    const languageCount = repos.reduce((acc, repo) => {
        if (repo.language) {
            acc[repo.language] = (acc[repo.language] || 0) + 1
        }
        return acc
    }, {})

    const data = Object.entries(languageCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 8)

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Lenguajes más usados</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: '#161b22',
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        border: '1px solid #30363d'
    },
    title: {
        fontSize: '1.25rem',
        marginBottom: '1rem',
        color: '#ffffff'
    }
}

export default LanguagesChart