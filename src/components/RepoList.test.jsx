import { render, screen } from '@testing-library/react'
import RepoList from './RepoList'

const mockRepos = [
    {
        id: 1,
        name: 'inventory-api',
        description: 'REST API de inventario',
        html_url: 'https://github.com/test/inventory-api',
        language: 'Python',
        stargazers_count: 5,
        forks_count: 2
    },
    {
        id: 2,
        name: 'github-dashboard',
        description: 'Dashboard de GitHub',
        html_url: 'https://github.com/test/github-dashboard',
        language: 'JavaScript',
        stargazers_count: 3,
        forks_count: 1
    }
]

describe('RepoList', () => {
    test('muestra el titulo Repositorios', () => {
        render(<RepoList repos={mockRepos} />)
        expect(screen.getByText('Repositorios')).toBeInTheDocument()
    })

    test('muestra los nombres de los repositorios', () => {
        render(<RepoList repos={mockRepos} />)
        expect(screen.getByText('inventory-api')).toBeInTheDocument()
        expect(screen.getByText('github-dashboard')).toBeInTheDocument()
    })

    test('muestra los lenguajes de los repositorios', () => {
        render(<RepoList repos={mockRepos} />)
        expect(screen.getByText('Python')).toBeInTheDocument()
        expect(screen.getByText('JavaScript')).toBeInTheDocument()
    })

    test('muestra las descripciones de los repositorios', () => {
        render(<RepoList repos={mockRepos} />)
        expect(screen.getByText('REST API de inventario')).toBeInTheDocument()
        expect(screen.getByText('Dashboard de GitHub')).toBeInTheDocument()
    })
})