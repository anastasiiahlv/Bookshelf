import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Booklist from './components/Booklist'
import AddBookForm from './components/AddBookForm'
import EditBookForm from './components/EditBookForm'
import BookshelfContext from './BookshelfContext'

function App() {
  const navigation = [
    { path: '/', name: 'Book List' },
    { path: '/add', name: 'Add Book' },
  ]

  return (
    <div className='container'>
      <BookshelfContext>
        <header>
          <h1>Bookshelf</h1>
          <h2>Book tracking system</h2>

          <nav>
            {navigation.map(nav => (
              <NavLink
                key={nav.name}
                to={nav.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {nav.name}
              </NavLink>
            ))}
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Booklist />} />
          <Route path='/add' element={<AddBookForm />} />
          <Route path='/edit/:id' element={<EditBookForm />} />
        </Routes>
      </BookshelfContext>
    </div>
  )
}

export default App

