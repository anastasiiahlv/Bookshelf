import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Booklist from './components/Booklist'
import AddBookForm from './components/AddBookForm'
import EditBookForm from './components/EditBookForm'
import BookProvider from './BookshelfContext'

function App() {
  return (
    <div className='container'>
      <BookProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Booklist />}/>
          <Route path='/add' element={<AddBookForm />}/>
          <Route path='/edit/:id' element={<EditBookForm />} />
        </Routes>
      </BookProvider>
    </div>
  )
}

export default App
