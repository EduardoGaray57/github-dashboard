import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { getCommits } from "../services/github.js";

function CommitsChart({ username, repos }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCommits = async () => {
            if (!repos.length) return

            const topRepos = repos.slice(0, 5)
            const monthsMap = {}

            const now = new Date()
            for (let i = 5; i >= 0; i--) {
                const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
                const key = date.toLocaleString('es-CL', {month: 'short', year: '2-digit'})
                monthsMap[key] = 0
            }
            try {
                const results = await Promise.all(
                    topRepos.map(repo => getCommits(username, repo.name))
                )
                results.forEach(res => {
                    res.data.forEach(commit => {
                        const date = new Date(commit.commit.author.date)
                        const key = date.toLocaleString('es-CL', {month: 'short', year: '2-digit'})
                        if (key in monthsMap) {
                            monthsMap[key]++
                        }
                    })
                })
            } catch (err) {
                console.error('Error cargando commits', err)
            } finally {
                setLoading(false)
            }
            setData(Object.entries(monthsMap).map(([mes, commits]) => ({mes, commits})))
        }

        fetchCommits()
    }, [username, repos])

    if(loading) return <div style={{ color: '#8b949e', padding: '1rem'}}>Cargando commits...</div>

    return (
        <div style={{ backgroundColor: '#161b22', padding:'1.5rem', borderRadius: '12px', marginBottom:'2rem', border: '1px solid #30363d'}}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color:'#ffffff'}}>Commits por mes</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#30363d"/>
                    <XAxis dataKey="mes" stroke="#8b949e"/>
                    <YAxis stroke="#8b949e"/>
                    <Tooltip contentStyle={{backgroundColor: '#161b22', border: '1px solid #30363d', color: '#ffffff'}}/>
                    <Bar dataKey="commits" fill="#238636" radius={[4, 4, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CommitsChart