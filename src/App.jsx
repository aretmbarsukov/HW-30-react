import React from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Книга контактів</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  )
}

export default App
