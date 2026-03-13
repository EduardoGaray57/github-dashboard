import { render, screen } from '@testing-library/react'
import UserProfile from './UserProfile'

const mockUser = {
    login: 'EduardoGaray57',
    name: 'Eduardo Garay',
    avatar_url: 'https://avatars.githubusercontent.com/u/1',
    bio: 'Developer',
    public_repos: 9,
    followers: 0,
    following: 0
}

describe('UserProfile', () => {
    test('muestra el nombre del usuario', () => {
        render(<UserProfile user={mockUser} />)
        expect(screen.getByText('Eduardo Garay')).toBeInTheDocument()
    })

    test('muestra el username con @', () => {
        render(<UserProfile user={mockUser} />)
        expect(screen.getByText('@EduardoGaray57')).toBeInTheDocument()
    })

    test('muestra el numero de repositorios', () => {
        render(<UserProfile user={mockUser} />)
        expect(screen.getByText('9')).toBeInTheDocument()
    })

    test('muestra la bio del usuario', () => {
        render(<UserProfile user={mockUser} />)
        expect(screen.getByText('Developer')).toBeInTheDocument()
    })
})