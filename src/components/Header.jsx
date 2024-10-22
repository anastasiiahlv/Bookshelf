import { NavLink } from 'react-router-dom'

const Header = () => {
    const navigation = [
        { path: '/', name: 'Book List' },
        { path: '/add', name: 'Add Book' },
    ]

    return (
        <header>
            <h1>Bookshelf</h1>
            <h2>Book tracking system</h2>

            <nav>
                {navigation.map(nav => (
                    <NavLink
                        key={nav.name}
                        to={nav.path}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        {nav.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Header
